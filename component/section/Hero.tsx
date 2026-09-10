import { personalInfo } from "@/data/personal";
import Button from "@/component/ui/button";
import SocialLinks from "@/component/common/SocialLinks";
import Reveal from "@/component/common/Reveal";
import TypingRoles from "@/component/common/TypingRoles";
import CountUp from "@/component/common/CountUp";
import { ArrowDown, ArrowRight, Download, FlaskConical, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { end: 3.77, decimals: 2, label: "CGPA at AIUB" },
  { end: 1211, decimals: 0, label: "Codeforces Rating" },
  { end: 1653, decimals: 0, label: "LeetCode Rating" },
  { end: 519, decimals: 0, label: "ICPC Dhaka Rank" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-[#faf8f4] to-[#faf8f4]"
    >
      <div className="grid-light pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl animate-blob animation-delay-2000" />

      <div className="section-container relative py-20 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Open to opportunities
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="text-gradient">Tanjil</span>
                <br />
                Bin Mohiuddin
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-5 text-lg sm:text-xl">
                <TypingRoles roles={personalInfo.roles} />
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-stone-500">
                <MapPin className="h-4 w-4" />
                {personalInfo.location}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl leading-relaxed text-stone-600">
                {personalInfo.bio}
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700">
                <FlaskConical className="h-4 w-4" />
                {personalInfo.seeking}
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#contact">
                  <Button size="lg">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resume/Tanjil_Cv.pdf" target="_blank">
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={330}>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-100 to-amber-100" />
              <div className="relative aspect-square w-64 overflow-hidden rounded-3xl border border-stone-200 shadow-xl sm:w-80">
                <Image
                  src="/tanjil.jpeg"
                  alt={personalInfo.name}
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-xl">
                <p className="text-xs text-stone-500">Currently</p>
                <p className="text-sm font-semibold text-stone-900">
                  Backend Developer @ Akij iBOS
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-stone-900">
                <CountUp end={stat.end} decimals={stat.decimals} />
              </div>
              <div className="mt-1 text-sm text-stone-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#about"
            aria-label="Scroll to about"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 shadow-sm transition-colors hover:text-indigo-600"
          >
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
