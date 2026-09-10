import SectionTitle from "@/component/ui/SectionTitle";
import Reveal from "@/component/common/Reveal";
import SkillTag from "@/component/common/SkillTag";
import { skills } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-y border-stone-200 bg-white">
      <div className="section-container">
        <SectionTitle
          eyebrow="Toolbox"
          title="Technical Skills"
          subtitle="Technologies and tools I work with day to day."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 70}>
              <Card className="h-full transition-transform duration-300 hover:-transtone-y-1 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-base">{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <SkillTag key={item} name={item} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
