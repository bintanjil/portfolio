import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/component/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanjil Bin Mohiuddin | Software Engineer",
  description: "Portfolio of Tanjil Bin Mohiuddin - Software Engineer and Full-Stack Developer specializing in ASP.NET, NestJS, and Next.js",
  keywords: ["Software Engineer", "Full-Stack Developer", "Web Developer", "ASP.NET", "NestJS", "Next.js", "Bangladesh"],
  authors: [{ name: "Tanjil Bin Mohiuddin" }],
  openGraph: {
    title: "Tanjil Bin Mohiuddin | Software Engineer",
    description: "Portfolio of Tanjil Bin Mohiuddin - Software Engineer and Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}