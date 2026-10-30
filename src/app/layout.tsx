import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandMarquee } from "@/components/brand-marquee";

const inter = DM_Sans({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://asnexatech.com"),
  title: {
    default: "AsNexa Technologies | AI Automation & Software Development",
    template: "%s | AsNexa Technologies",
  },
  description:
    "AsNexa Technologies helps businesses streamline operations with AI automation, intelligent agents, customer support systems and custom software development.",
  applicationName: "AsNexa Technologies",
  icons: { icon: "/asnexa-symbol.jpg", shortcut: "/asnexa-symbol.jpg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://asnexatech.com",
    siteName: "AsNexa Technologies",
    title: "AsNexa Technologies | AI Automation & Software Development",
    description:
      "Practical AI systems and thoughtful software, built around the way your business works.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AsNexa Technologies | AI Automation & Software Development",
    description: "Practical AI systems and thoughtful software for growing businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <SiteHeader />
        <BrandMarquee />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}