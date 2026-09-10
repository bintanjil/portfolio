import SectionTitle from "@/component/ui/SectionTitle";
import Reveal from "@/component/common/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { personalInfo } from "@/data/personal";
import {
  Briefcase,
  Code2,
  Database,
  FlaskConical,
  GraduationCap,
  Layers,
  MapPin,
  Target,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Backend Engineering",
    description:
      "Designing and optimizing enterprise ERP systems and RESTful APIs with clean, maintainable architecture.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications with ASP.NET Core, NestJS, Next.js, and PostgreSQL.",
  },
  {
    icon: Code2,
    title: "Problem Solving",
    description:
      "Active competitive programmer with strong algorithmic thinking and optimization skills.",
  },
];

const facts = [
  { icon: Briefcase, label: "Current Role", value: "Associate Backend Developer" },
  { icon: GraduationCap, label: "Education", value: "B.Sc. CSE, AIUB" },
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Target, label: "Focus", value: "ERP · Backend · Data Systems" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionTitle
          eyebrow="About"
          title="About Me"
          subtitle="A backend developer focused on building reliable, scalable enterprise software."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-4 leading-relaxed text-stone-600">
              <p>
                I&apos;m {personalInfo.name}, an Associate Backend Developer at
                Akij iBOS Limited, where I work on enterprise ERP systems for
                organizations such as Bangladesh Military Academy, Paragon
                Group, and Prince Bazaar. I hold a B.Sc. in Computer Science and
                Engineering from AIUB with a CGPA of 3.77/4.00.
              </p>
              <p>
                My work spans inventory management, financial tracking, and
                workflow automation, with a strong emphasis on database
                optimization and system reliability. Outside of work, I&apos;m
                an active competitive programmer who enjoys solving algorithmic
                challenges.
              </p>

              <div className="flex gap-3 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <FlaskConical className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                <div>
                  <p className="text-sm font-semibold text-indigo-900">
                    {personalInfo.seeking}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-indigo-800/80">
                    {personalInfo.research}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-stone-400">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-stone-900">
                          {value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 80}>
              <Card className="group h-full border-t-4 border-t-indigo-600 transition-all duration-300 hover:-transtone-y-1 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display font-bold text-stone-900">
                    {title}
                  </h3>
                  <p className="text-sm text-stone-600">{description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
