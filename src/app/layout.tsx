import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const clash = localFont({
  src: [
    { path: "../fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoBoss OS — The Operating System for Contractors",
  description:
    "Turn your contracting business from a job you own into a business that runs. AI-powered growth, operations, and automation — installed in 90 days.",
  openGraph: {
    title: "AutoBoss OS — Stop Being the Bottleneck",
    description:
      "You built a $500K job. Not a business. AutoBoss OS fixes that in 90 days.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clash.variable} ${sourceSerif.variable} antialiased`}
        style={{ fontFamily: "var(--font-source, Georgia, serif)" }}
      >
        {children}
      </body>
    </html>
  );
}
