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
    "FLX Software verbindet Menschen, Informationen und Arbeitsabläufe in individueller Software – mit ERP-Anbindung und optional betriebsinterner KI.",
  openGraph: {
    title: "FLX Software | Individuelle Unternehmenssoftware",
    description:
      "Eine zentrale Plattform für Ihren Betrieb. Individuell auf Ihre Abläufe abgestimmt.",
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
    icon: "/brand/logo-mark-clear.png",
    apple: "/brand/logo-mark-clear.png",
  },
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
