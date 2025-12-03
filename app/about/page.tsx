import About from "@/component/section/About";
import Education from "@/component/section/Education";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tanjil Bin Mohiuddin",
  description: "Learn more about Tanjil Bin Mohiuddin - Computer Science student and Full-Stack Developer",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      <About />
      <Education />
    </div>
  );
}