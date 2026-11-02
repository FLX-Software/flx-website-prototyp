import { company } from "@/lib/company";

export type FormSubmitResult =
  | { status: "accepted"; message?: string }
  | { status: "rejected"; message?: string }
  | { status: "uncertain"; message?: string }
  | { status: "network"; message?: string };

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const REQUEST_TIMEOUT_MS = 20_000;

function isAcceptedSuccess(value: unknown): boolean {
  return value === true || value === "true";
}

function isRejectedSuccess(value: unknown): boolean {
  return value === false || value === "false";
}

async function readFormSubmitBody(response: Response): Promise<{
  success?: unknown;
  message?: string;
  raw: string;
}> {
  const raw = await response.text();

  if (!raw.trim()) {
    return { raw };
  }

  try {
    const parsed = JSON.parse(raw) as {
      success?: unknown;
      message?: unknown;
    };

    return {
      success: parsed.success,
      message:
        typeof parsed.message === "string" ? parsed.message : undefined,
      raw,
    };
  } catch {
    return { raw };
  }
}

export async function submitContactForm(
  payload: ContactPayload,
): Promise<FormSubmitResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(company.formSubmitEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        name: payload.name,
        company: payload.company,
        email: payload.email,
        message: payload.message,
        _replyto: payload.email,
        _subject: `Anfrage von ${payload.name} (${company.websiteLabel})`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const body = await readFormSubmitBody(response);

    if (isAcceptedSuccess(body.success)) {
      return { status: "accepted", message: body.message };
    }

    if (isRejectedSuccess(body.success)) {
      return { status: "rejected", message: body.message };
    }

    // FormSubmit can return HTTP 200 with unclear bodies; never invent success.
    if (!response.ok) {
      return {
        status: "rejected",
        message: body.message || `HTTP ${response.status}`,
      };
    }

    return {
      status: "uncertain",
      message: body.message || body.raw || `HTTP ${response.status}`,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return {
        status: "uncertain",
        message: "timeout",
      };
    }

    return {
      status: "network",
      message: error instanceof Error ? error.message : "network error",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
