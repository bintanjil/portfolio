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
            <div className="space-y-4 leading-relaxed text-neutral-600">
              <p className="text-base sm:text-lg">
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

              <div className="flex gap-3 rounded-xl border border-green-100 bg-green-50 p-4">
                <FlaskConical className="h-5 w-5 flex-shrink-0 text-green-800" />
                <div>
                  <p className="text-sm font-semibold text-green-950">
                    {personalInfo.seeking}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-green-900/80">
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
                      <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-400">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-neutral-900">
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
              <Card className="group h-full border-t-4 border-t-green-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex rounded-lg bg-green-50 p-3 text-green-800 ring-1 ring-inset ring-green-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold text-neutral-900">
                    {title}
                  </h3>
                  <p className="text-sm text-neutral-600">{description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
