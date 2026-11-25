import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/component/layout/ClientLayout";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanjil Bin Mohiuddin",
  description:
    "Tanjil Bin Mohiuddin: student researcher at ELITE Research Lab and former Associate Backend Developer at Akij iBOS Limited, working on medical image analysis and vision-language models. Seeking MSc and PhD opportunities.",
  keywords: [
    "Tanjil Bin Mohiuddin",
    "Backend Developer",
    "Computer Vision",
    "Machine Learning",
    "Vision-Language Models",
    "MSc",
    "PhD",
    "Medical Image Analysis",
    "ASP.NET Core",
    "NestJS",
    "Bangladesh",
  ],
  authors: [{ name: "Tanjil Bin Mohiuddin" }],
  openGraph: {
    title: "Tanjil Bin Mohiuddin",
    description:
      "Student Researcher at ELITE Research Lab · Research in medical image analysis and vision-language models",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
