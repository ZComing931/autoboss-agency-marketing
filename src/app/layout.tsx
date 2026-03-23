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
  title: "AutoBoss — Stop Renting Leads. Start Owning Them.",
  description:
    "Local SEO for general contractors & home service businesses. Top 3 on Google in 90 days or we work for free. $397/month — everything included.",
  openGraph: {
    title: "AutoBoss — Stop Renting Leads. Start Owning Them.",
    description:
      "Stop paying Angi & HomeAdvisor for shared leads. Own your leads with local SEO. Top 3 on Google in 90 days — guaranteed. $397/month.",
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
