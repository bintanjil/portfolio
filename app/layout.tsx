import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/component/layout/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanjil Bin Mohiuddin",
  description:
    "Tanjil Bin Mohiuddin: Associate Backend Developer at Akij iBOS Limited and aspiring researcher in computer vision, machine learning, MLLMs and VLMs. Seeking research and PhD opportunities.",
  keywords: [
    "Tanjil Bin Mohiuddin",
    "Backend Developer",
    "Computer Vision",
    "Machine Learning",
    "Vision-Language Models",
    "PhD",
    "ASP.NET Core",
    "NestJS",
    "Bangladesh",
  ],
  authors: [{ name: "Tanjil Bin Mohiuddin" }],
  openGraph: {
    title: "Tanjil Bin Mohiuddin",
    description:
      "Associate Backend Developer at Akij iBOS Limited · Research in computer vision, MLLMs and VLMs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
