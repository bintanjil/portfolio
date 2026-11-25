import Hero from "@/component/section/Hero";
import Research from "@/component/section/Research";
import Experience from "@/component/section/Experience";
import Projects from "@/component/section/Projects";
import Achievements from "@/component/section/Achievements";
import Education from "@/component/section/Education";
import Skills from "@/component/section/Skills";
import Contact from "@/component/section/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Research />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
