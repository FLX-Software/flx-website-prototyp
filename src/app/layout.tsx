import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import { DotField } from "@/components/DotField";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flx-software.de"),
  title: {
    default: "FLX Software | Individuelle Unternehmenssoftware",
    template: "%s | FLX Software",
  },
  description:
    "FLX Software entwickelt individuelle Unternehmenssoftware: Webanwendungen, interne Tools, digitale Formulare und Vernetzung bestehender Abläufe.",
  openGraph: {
    title: "FLX Software | Individuelle Unternehmenssoftware",
    description:
      "Individuelle Software für Ihr Unternehmen. Abgestimmt auf Ihre Abläufe und bestehenden Programme.",
    locale: "de_DE",
    type: "website",
    url: "https://www.flx-software.de",
    images: [
      {
        url: "/brand/logo-mark-clear.png",
        width: 1024,
        height: 1024,
        alt: "FLX Software Logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${sora.variable} ${sourceSans.variable} antialiased`}>
        <LocaleProvider>
          <SkipLink />
          <DotField />
          <div className="site-shell">
            <Header />
            {children}
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
