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
    <section id="research" className="section-padding border-y border-green-100 bg-green-50/40">
      <div className="section-container">
        <SectionTitle
          eyebrow="Academia"
          title="Research & PhD Goals"
          subtitle={personalInfo.seeking}
        />

        <Reveal>
          <div className="mb-8 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-5">
            <FlaskConical className="h-5 w-5 flex-shrink-0 text-green-800" />
            <p className="text-sm leading-relaxed text-green-900">
              {personalInfo.research}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="mb-4 font-semibold text-neutral-900">
                  Research Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-green-100 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-green-300 hover:bg-green-50 hover:text-green-900"
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
                <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="mb-3 inline-flex rounded-lg bg-green-50 p-3 text-green-800 ring-1 ring-inset ring-green-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1 font-semibold text-neutral-900">
                      {title}
                    </h3>
                    <p className="text-sm text-neutral-600">{description}</p>
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
