import Hero from "@/component/section/Hero";
import About from "@/component/section/About";
import Experience from "@/component/section/Experience";
import Projects from "@/component/section/Project";
import Skills from "@/component/section/Skills";
import Education from "@/component/section/Education";
import Research from "@/component/section/Research";
import Achievements from "@/component/section/Achievements";
import Cta from "@/component/section/Cta";
import Contact from "@/component/section/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanjil Bin Mohiuddin | Associate Backend Developer",
  description:
    "Portfolio of Tanjil Bin Mohiuddin - Associate Backend Developer at Akij iBOS Limited, building enterprise ERP systems with ASP.NET Core and NestJS. Seeking research and PhD opportunities.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Research />
      <Achievements />
      <Cta />
      <Contact />
    </>
  );
}
