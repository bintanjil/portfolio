import Image from "next/image";
import Section from "@/component/ui/Section";
import { personalInfo } from "@/data/personal";

const links = [
  { label: "Email", href: `mailto:${personalInfo.email}` },
  { label: "CV", href: personalInfo.resume, external: true },
  { label: "GitHub", href: personalInfo.github, external: true },
  { label: "LinkedIn", href: personalInfo.linkedin, external: true },
  { label: "Codeforces", href: personalInfo.codeforces, external: true },
  { label: "LeetCode", href: personalInfo.leetcode, external: true },
];

const news = [
  {
    date: "May 2026",
    text: (
      <>
        Joined <strong className="font-semibold">Akij iBOS Limited</strong> as an
        Associate Backend Developer.
      </>
    ),
  },
  {
    date: "Jan 2026",
    text: (
      <>
        Completed my B.Sc. in Computer Science and Engineering at AIUB with a CGPA of
        3.77 / 4.00.
      </>
    ),
  },
  {
    date: "Jan 2026",
    text: <>Started as a Backend Developer Intern at Akij iBOS Limited.</>,
  },
  {
    date: "Nov 2025",
    text: (
      <>
        Placed 519th of 1,842 teams at the ICPC Dhaka 2025 Preliminary with Team
        AIUB_logN.
      </>
    ),
  },
];

export default function Intro() {
  return (
    <>
      <section id="about" className="pt-12 sm:pt-16">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:gap-12">
          <div className="flex-1">
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-[2.9rem]">
              {personalInfo.name}
            </h1>
            <p className="mt-3 text-[15px] text-muted">
              {personalInfo.title}, Akij iBOS Limited
            </p>
            <p className="mt-0.5 text-sm text-faint">{personalInfo.location}</p>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-ink/85">
              <p>
                I work as a backend developer with ASP.NET Core and C#, and I am a
                competitive programmer on Codeforces and LeetCode.
              </p>
              <p>
                I am looking for research and PhD opportunities. My research interests
                are computer vision, machine learning, multimodal large language models
                (MLLMs) and vision-language models (VLMs).
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-y-2 text-sm">
              {links.map((link, i) => (
                <li key={link.label} className="flex items-center">
                  {i > 0 && <span className="mx-2.5 text-rule">·</span>}
                  <a
                    href={link.href}
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="link font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full bg-rule shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)] ring-4 ring-surface sm:h-44 sm:w-44">
            <Image
              src="/tanjil.jpeg"
              alt={personalInfo.name}
              fill
              priority
              sizes="176px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <Section id="news" title="News">
        <ul className="space-y-3 text-[15px] leading-relaxed">
          {news.map((item, i) => (
            <li key={i} className="flex gap-5">
              <span className="w-[4.5rem] shrink-0 pt-px text-sm tabular-nums text-faint">
                {item.date}
              </span>
              <span className="text-ink/85">{item.text}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
