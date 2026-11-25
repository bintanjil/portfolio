import { ArrowUpRight, Award, Code2, GraduationCap, Medal, TrendingUp } from "lucide-react";
import Section from "@/component/ui/Section";
import Reveal from "@/component/common/Reveal";
import { cn } from "@/lib/utils";
import { contests, leadership, platforms } from "@/data/achievements";

const highlights = [
  {
    Icon: Award,
    title: "Outstanding Performer",
    label: "Akij iBOS Limited · Performer of the Month",
    detail: "Recognized for outstanding contribution and consistent performance (August).",
    wide: true,
  },
  {
    Icon: Medal,
    title: "519th of 1,842",
    label: "ICPC Dhaka 2025 Preliminary",
    detail: "Nationwide, as Team AIUB_logN.",
    href: contests[0]?.link,
  },
  {
    Icon: GraduationCap,
    title: "Top 5%",
    label: "Dean's Award · AIUB",
    detail: "CSE department, Fall 2022 – Fall 2024.",
  },
  {
    Icon: TrendingUp,
    title: "1211 · Pupil",
    label: "Codeforces",
    detail: "Max rating, top 24% of users.",
    href: platforms[0]?.link,
  },
  {
    Icon: Code2,
    title: "Top 16.9%",
    label: "LeetCode",
    detail: "Rating 1653, global ranking.",
    href: platforms[1]?.link,
  },
];

export default function Achievements() {
  const otherContests = contests.slice(1);

  return (
    <Section id="awards" number="04" eyebrow="Accomplishments" title="Awards & Recognition">
      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map(({ Icon, title, label, detail, wide, href }, i) => {
          const card = (
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-950 sm:p-7">
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Icon className="h-4 w-4" />
                </span>
                {href && <ArrowUpRight className="h-4 w-4 text-neutral-400" />}
              </div>
              <p className={cn("mt-6 font-bold tracking-tight text-neutral-950", wide ? "text-4xl sm:text-5xl" : "text-3xl")}>
                {title}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                {label}
              </p>
              <p className="mt-2 text-sm text-neutral-600">{detail}</p>
            </div>
          );

          return (
            <Reveal key={title} delay={i * 60} className={cn("h-full", wide && "sm:col-span-2")}>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full transition-transform hover:-translate-y-0.5">
                  {card}
                </a>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          Leadership &amp; community
        </p>
        <ul className="mt-4 border-t border-neutral-200">
          {leadership.map((item) => (
            <li key={item.organization} className="border-b border-neutral-200 py-5">
              <p className="text-lg font-semibold tracking-tight text-neutral-950">{item.organization}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {item.roles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-neutral-200 px-3 py-0.5 font-mono text-[11px] text-neutral-600"
                  >
                    {role}
                  </li>
                ))}
              </ul>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-neutral-600">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          Contests &amp; online judges
        </p>
        <ul className="mt-4 border-t border-neutral-200">
          {[
            ...otherContests.map((c) => ({ name: `${c.name}: ${c.result}`, tag: c.team, link: c.link })),
            ...platforms.map((p) => ({ name: p.name + (p.handle ? ` (@${p.handle})` : ""), tag: p.detail, link: p.link })),
          ].map((row, i) => (
            <li key={row.name} className="border-b border-neutral-200">
              <a
                href={row.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-3.5"
              >
                <span className="font-mono text-[11px] text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] text-neutral-950 group-hover:underline group-hover:underline-offset-4">
                  {row.name}
                </span>
                <span className="hidden rounded-full border border-neutral-200 px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 sm:inline">
                  {row.tag}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
