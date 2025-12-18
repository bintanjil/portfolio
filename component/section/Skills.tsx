import SectionTitle from "@/component/ui/SectionTitle";
import SkillTag from "@/component/common/SkillTag";
import { skills } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";

export default function Skills() {
  return (
    <section id="skills" className="section-padding pt-32 bg-slate-900 relative overflow-hidden">
      {/* Simple elegant background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(139,92,246,0.12),transparent_40%)]" />
      </div>
      <div className="section-container relative z-10">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 border-slate-800 bg-slate-950/50 backdrop-blur-sm hover:-translate-y-2 hover:scale-105 hover:border-indigo-500/50 animate-fadeIn relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/10 before:to-violet-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg text-slate-100 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full animate-slideDown"></span>
                  {skillCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skillCategory.items.map((skill) => (
                    <SkillTag key={skill.name} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}