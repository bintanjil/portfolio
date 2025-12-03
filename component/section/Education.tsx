import SectionTitle from "@/component/ui/SectionTitle";
import { education } from "@/data/education";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Simple elegant background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(139,92,246,0.12),transparent_40%)]" />
      </div>
      <div className="section-container relative z-10">
        <SectionTitle
          title="Education"
          subtitle="My academic background and achievements"
        />

        <Card className="group max-w-3xl mx-auto shadow-2xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 border-slate-800 bg-slate-900/50 backdrop-blur-sm animate-fadeIn hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/5 before:to-violet-500/5">
          <CardHeader className="bg-gradient-to-r from-indigo-950/50 to-violet-950/50 border-b border-slate-800 relative z-10">
              <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl shadow-lg shadow-indigo-500/50 animate-bounceIn group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="mb-2 text-slate-100">{education.institution}</CardTitle>
                  <p className="text-slate-400">
                    {education.degree} in {education.description}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    {education.duration}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg shadow-lg shadow-indigo-500/50 hover:scale-110 transition-transform duration-300">
                  <p className="text-xs font-medium">CGPA</p>
                  <p className="font-bold text-xl">{education.gpa}</p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-slate-100">
              <Award className="w-5 h-5 text-indigo-600" />
              Honors & Awards
            </h4>
            <div className="space-y-4">
              {education.awards.map((award, index) => (
                <div key={index} className="border-l-2 border-indigo-600 pl-4 py-2 hover:bg-slate-900/30 rounded-r transition-colors duration-200">
                  <h5 className="font-semibold text-slate-100">{typeof award === 'string' ? award : (award as any).title}</h5>
                  {typeof award !== 'string' && award && (
                    <>
                      <p className="text-sm text-slate-400">{(award as any).description}</p>
                      <p className="text-xs text-slate-500 mt-1">{(award as any).period}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}