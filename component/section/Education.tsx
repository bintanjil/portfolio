import SectionTitle from "@/component/ui/SectionTitle";
import Reveal from "@/component/common/Reveal";
import { education } from "@/data/education";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import Badge from "@/component/ui/badge";
import { Award, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <SectionTitle
          eyebrow="Academics"
          title="Education"
          subtitle="My academic background and honors."
        />

        <Reveal>
          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>{education.institution}</CardTitle>
                    <p className="mt-1 text-sm text-stone-600">
                      {education.degree}
                    </p>
                    <p className="mt-1 text-sm text-stone-600">
                      {education.duration}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-green-600">{education.status}</Badge>
                  <div className="rounded-lg border border-stone-200 px-4 py-2 text-center">
                    <p className="text-xs text-stone-600">CGPA</p>
                    <p className="text-lg font-bold text-stone-900">
                      {education.gpa}
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-stone-900">
                <Award className="h-5 w-5 text-indigo-600" />
                Honors &amp; Awards
              </h4>
              <div className="space-y-3">
                {education.awards.map((award) => (
                  <div
                    key={award.title}
                    className="border-l-2 border-indigo-600 pl-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h5 className="font-medium text-stone-900">
                        {award.title}
                      </h5>
                      <span className="text-xs text-stone-600">
                        {award.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-stone-600">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
