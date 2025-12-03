import Skills from "@/component/section/Skills";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Tanjil Bin Mohiuddin",
  description: "Technical skills including C++, C#, ASP.NET, NestJS, Entity Framework, PostgreSQL, and full-stack development",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-900">
      <Skills />
    </div>
  );
}