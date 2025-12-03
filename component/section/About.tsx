import SectionTitle from "@/component/ui/SectionTitle";
import { personalInfo } from "@/data/personal";
import { Card, CardContent } from "@/component/ui/card";
import { Code2, Database, Layout } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Full-Stack Development",
      description: "Experienced in building scalable web applications using modern frameworks and technologies.",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend Architecture",
      description: "Proficient in designing robust APIs and implementing enterprise-level solutions.",
    },
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: "Problem Solving",
      description: "Active competitive programmer with strong algorithmic thinking and optimization skills.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Simple elegant background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(139,92,246,0.12),transparent_40%)]" />
      </div>
      <div className="section-container relative z-10" suppressHydrationWarning>
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my background and what I do"
        />
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center group hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 border-slate-800 bg-slate-900/50 backdrop-blur-sm animate-slideUp hover:scale-105 hover:border-indigo-500/50 hover:-translate-y-2 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/10 before:to-violet-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="pt-6 relative z-10">
                <div className="flex justify-center mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 animate-bounceIn" style={{ animationDelay: `${index * 150 + 200}ms` }}>{item.icon}</div>
                <h3 className="font-semibold mb-2 text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Education Section */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full"></span>
              Education
            </h3>
            <div className="space-y-3">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-xl font-semibold text-indigo-400">American International University-Bangladesh (AIUB)</h4>
                  <p className="text-slate-300">B.Sc. in Computer Science and Engineering</p>
                  <p className="text-slate-400 text-sm">Dhaka, Bangladesh</p>
                </div>
                <span className="text-slate-400">Jan 2022 – Jan 2026</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🏆</span>
                    <h5 className="font-semibold text-slate-100">Dean's Award</h5>
                  </div>
                  <p className="text-sm text-slate-400">Top 5% student in CSE department</p>
                  <p className="text-xs text-slate-500 mt-1">Fall 2022 – Fall 2024</p>
                </div>
                
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🎓</span>
                    <h5 className="font-semibold text-slate-100">Academic Scholarship</h5>
                  </div>
                  <p className="text-sm text-slate-400">Consistent academic excellence</p>
                  <p className="text-xs text-slate-500 mt-1">Fall 2023 – Spring 2024</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            I'm a passionate Computer Science student at AIUB, recognized in the top 5% of my department. 
            My journey combines academic excellence with practical experience in full-stack development and 
            competitive programming. I've built enterprise-grade applications using ASP.NET and NestJS, 
            competed in ICPC preliminaries, and actively solve algorithmic challenges on platforms like 
            LeetCode and Codeforces. I'm dedicated to creating scalable solutions and continuously improving 
            my problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}