import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/config/site";
import { Measurement } from "@/components/measurement";
import "./globals.css";
export const metadata: Metadata = {
  ...(site.origin ? { metadataBase: new URL(site.origin) } : {}),
  ...(site.origin ? { alternates: { canonical: site.origin + "/" } } : {}),
  title: {
    default: "Business Automation & Websites | AM Automations",
    template: "%s | AM Automations",
  },
  description: site.description,
  twitter: {
    card: "summary_large_image",
    title: "AM Automations",
    description: site.description,
    images: ["/branding/share.jpg"],
  },
  icons: { icon: "/branding/favicon.svg" },
  openGraph: {
    title: "AM Automations",
    description: site.description,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/branding/share.jpg",
        width: 1200,
        height: 630,
        alt: "AM Automations — Websites, quotation follow-ups and connected systems",
      },
    ],
  },
};
const themeScript = `(()=>{let t;try{t=localStorage.getItem('am-theme')}catch{}document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'})()`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Measurement />
      </body>
    </html>
  );
}
