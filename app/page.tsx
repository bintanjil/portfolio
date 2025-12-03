import Hero from "@/component/section/Hero";
import QuickStats from "@/component/section/QuickStats";
import PageLoader from "@/component/ui/PageLoader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanjil Bin Mohiuddin | Software Engineer",
  description: "Portfolio of Tanjil Bin Mohiuddin - Software Engineer and Full-Stack Developer specializing in ASP.NET, NestJS, and Next.js",
};

export default function Home() {
  return (
    <>
      <PageLoader />
      <Hero />
      <QuickStats />
    </>
  );
}
