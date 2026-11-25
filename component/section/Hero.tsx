import Image from "next/image";
import { ArrowDown, ArrowUpRight, Building2, FileText, Github, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal";
import LiveClock from "@/component/common/LiveClock";

const pill =
  "inline-flex h-11 items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 font-mono text-[13px] text-neutral-800 transition-colors hover:border-neutral-950";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">

      <div className="container-page relative pb-14 pt-12 sm:pb-16 sm:pt-16">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <h1 className="text-[3.6rem] font-bold leading-[0.92] tracking-[-0.045em] text-neutral-950 sm:text-8xl lg:text-[6.5rem]">
              Tanjil
              <br />
              <span className="text-neutral-400">Bin Mohiuddin</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
              Student researcher at ELITE Research Lab and former backend developer at Akij iBOS. Looking for MSc and PhD
              opportunities in{" "}
              <a href="#research" className="link-u font-medium text-indigo-600">medical image analysis</a>,
              computer vision and vision-language models.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {personalInfo.location}
              </span>
              <span className="h-3 w-px bg-neutral-300" />
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                <LiveClock timeZone="Asia/Dhaka" /> BST
              </span>
              <span className="h-3 w-px bg-neutral-300" />
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                {personalInfo.title}, ELITE Research Lab
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-neutral-950 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                See my work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className={pill}>
                <FileText className="h-4 w-4" />
                CV
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={pill}>
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className={pill}>
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          <div className="relative shrink-0 self-start lg:self-center">
            <div className="relative h-36 w-36 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-neutral-200 sm:h-48 sm:w-48 lg:h-64 lg:w-64">
              <Image
                src="/tanjil.jpeg"
                alt={personalInfo.name}
                fill
                priority
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 192px, 256px"
                className="object-cover object-top"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Open to MSc &amp; PhD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
