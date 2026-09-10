import SectionTitle from "@/component/ui/SectionTitle";
import Reveal from "@/component/common/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import Badge from "@/component/ui/badge";
import { awards, contests, platforms } from "@/data/achievements";
import { Award, ExternalLink, Star, Trophy } from "lucide-react";
import Link from "next/link";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="section-container">
        <SectionTitle
          eyebrow="Recognition"
          title="Achievements"
          subtitle="Competitive programming results and professional recognition."
        />

        <div className="mb-6 grid gap-6 lg:grid-cols-3">
          {awards.map((award, index) => (
            <Reveal key={award.title} delay={index * 80}>
              <Card className="h-full border-amber-200 bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex rounded-lg bg-amber-100 p-3 text-amber-600">
                    <Star className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stone-900">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-amber-700">
                    {award.organization} · {award.period}
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-indigo-600" />
                  Competitive Programming
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {platforms.map((platform) => (
                  <Link
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-stone-200 p-3 transition-colors hover:border-indigo-300 hover:bg-indigo-50"
                  >
                    <div>
                      <p className="font-medium text-stone-900">
                        {platform.name}
                        {platform.handle && (
                          <span className="ml-2 text-sm font-normal text-stone-600">
                            @{platform.handle}
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-stone-600">
                        {platform.detail}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-stone-500" />
                  </Link>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-indigo-600" />
                  Contest Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contests.map((contest) => (
                  <div
                    key={contest.name}
                    className="border-l-2 border-indigo-600 pl-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-medium text-stone-900">
                          {contest.name}
                        </h4>
                        <p className="text-sm text-stone-600">
                          {contest.result}
                        </p>
                        <Badge variant="secondary" className="mt-2">
                          {contest.team}
                        </Badge>
                      </div>
                      <Link
                        href={contest.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Standings"
                        className="text-stone-500 transition-colors hover:text-indigo-600"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
