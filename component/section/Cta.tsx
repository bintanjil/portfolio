import { personalInfo } from "@/data/personal";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-[#fffdf8] to-amber-50/70 px-8 py-14 text-center sm:px-14">
          <div className="grid-light pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-stone-900 sm:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              I&apos;m open to backend engineering roles, research
              collaborations, and PhD opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-indigo-600 px-6 font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-stone-300 bg-white px-6 font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
