import { ReactNode } from "react";
import Reveal from "@/component/common/Reveal";

interface SectionProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  bordered?: boolean;
  children: ReactNode;
}

export default function Section({ id, number, eyebrow, title, bordered = true, children }: SectionProps) {
  return (
    <section id={id} className="container-page">
      <div className={bordered ? "border-t border-neutral-200 py-16 sm:py-20" : "py-16 sm:py-20"}>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            {eyebrow}
          </p>
          <h2 className="mt-3 flex items-baseline gap-3 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            <span className="font-mono text-base font-medium text-indigo-600 sm:text-lg">
              {number} /
            </span>
            {title}
          </h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
