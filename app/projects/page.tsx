import Projects from "@/component/section/Project";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tanjil Bin Mohiuddin",
  description: "Explore projects by Tanjil Bin Mohiuddin including Healthcare API and Gadgeto E-commerce Platform",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-900">
      <Projects />
    </div>
  );
}