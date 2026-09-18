import { personalInfo } from "@/data/personal";
import SocialLinks from "@/component/common/SocialLinks";
import LiveClock from "@/component/common/LiveClock";
import { ArrowRight, Download, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="dot-grid absolute -right-4 top-6 hidden h-28 w-40 sm:block" />

      <div className="section-container relative py-16 sm:py-20">
        <h1 className="text-[3.25rem] font-black leading-[0.95] tracking-tighter text-neutral-950 sm:text-7xl lg:text-8xl">
          Tanjil Bin
          <br />
          Mohiuddin
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          {personalInfo.title} at{" "}
          <span className="font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4">
            Akij iBOS Limited
          </span>
          , building enterprise ERP systems on ASP.NET Core and NestJS.
          Competitive programmer and aspiring researcher interested in
          distributed systems and databases.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs uppercase tracking-wider text-neutral-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {personalInfo.location}
          </span>
          <span className="text-neutral-300">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            <LiveClock timeZone="Asia/Dhaka" label="+06 BST" />
          </span>
          <span className="text-neutral-300">·</span>
          <span>{personalInfo.seeking}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-neutral-950 px-5 font-mono text-sm text-white transition-colors hover:bg-neutral-800"
          >
            See my work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/resume/Tanjil_Cv.pdf"
            target="_blank"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-neutral-300 px-5 font-mono text-sm text-neutral-800 transition-colors hover:border-neutral-950"
          >
            <Download className="h-4 w-4" />
            CV
          </Link>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
