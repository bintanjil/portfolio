import { personalInfo } from "@/data/personal";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-950 px-8 py-16 text-center sm:px-14">
          <div className="dot-grid absolute -right-6 -top-6 h-32 w-40 text-neutral-800" />
          <div className="relative">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              I&apos;m open to backend engineering roles, research
              collaborations, and PhD opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-green-700 px-6 font-mono text-sm text-white transition-colors hover:bg-green-600"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-neutral-700 px-6 font-mono text-sm text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900"
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
