import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/component/layout/ClientLayout";
import { Toaster } from "sonner";
import AIChatbot from "@/component/chat/AIChatbot";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={spaceGrotesk.className} suppressHydrationWarning>
        <Toaster 
          position="top-right" 
          theme="dark"
          toastOptions={{
            style: {
              background: 'rgb(15 23 42)',
              color: 'rgb(226 232 240)',
              border: '1px solid rgb(51 65 85)',
            },
          }}
        />
        <ClientLayout>{children}</ClientLayout>
        <AIChatbot />
      </body>
    </html>
  );
}