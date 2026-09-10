import SectionTitle from "@/component/ui/SectionTitle";
import Reveal from "@/component/common/Reveal";
import { Card, CardContent } from "@/component/ui/card";
import { personalInfo } from "@/data/personal";
import { BookOpen, FlaskConical, GraduationCap, Microscope } from "lucide-react";

const interests = [
  "Distributed Systems",
  "Databases & Query Optimization",
  "Applied Machine Learning",
  "Software Architecture",
  "Systems Reliability",
];

const goals = [
  {
    icon: Microscope,
    title: "Research",
    description:
      "Investigating scalable data systems and performance-driven architectures.",
  },
  {
    icon: BookOpen,
    title: "Publication",
    description:
      "Turning real-world engineering challenges into publishable research.",
  },
  {
    icon: GraduationCap,
    title: "PhD",
    description:
      "Seeking a funded PhD position to pursue long-term research goals.",
  },
];

export default function Research() {
  return (
    <section id="research" className="section-padding border-y border-stone-200 bg-white">
      <div className="section-container">
        <SectionTitle
          eyebrow="Academia"
          title="Research & PhD Goals"
          subtitle={personalInfo.seeking}
        />

        <Reveal>
          <div className="mb-8 flex gap-3 rounded-xl border border-indigo-200 bg-indigo-50 p-5">
            <FlaskConical className="h-5 w-5 flex-shrink-0 text-indigo-600" />
            <p className="text-sm leading-relaxed text-indigo-800">
              {personalInfo.research}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="mb-4 font-semibold text-stone-900">
                  Research Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-stone-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {goals.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 80}>
                <Card className="h-full transition-transform duration-300 hover:-transtone-y-1 hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="mb-3 inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1 font-semibold text-stone-900">
                      {title}
                    </h3>
                    <p className="text-sm text-stone-600">{description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
