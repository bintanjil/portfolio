import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/component/layout/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanjil Bin Mohiuddin | Associate Backend Developer",
  description:
    "Portfolio of Tanjil Bin Mohiuddin - Associate Backend Developer at Akij iBOS Limited, building enterprise ERP systems with ASP.NET Core and NestJS. Seeking research and PhD opportunities.",
  keywords: [
    "Backend Developer",
    "Software Engineer",
    "Full-Stack Developer",
    "ASP.NET Core",
    "NestJS",
    "Next.js",
    "Bangladesh",
  ],
  authors: [{ name: "Tanjil Bin Mohiuddin" }],
  openGraph: {
    title: "Tanjil Bin Mohiuddin | Associate Backend Developer",
    description:
      "Portfolio of Tanjil Bin Mohiuddin - Associate Backend Developer at Akij iBOS Limited",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
