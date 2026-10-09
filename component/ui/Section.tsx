import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mt-16">
      <h2 className="mb-6 flex items-baseline gap-3 font-serif text-[1.6rem] font-semibold tracking-tight text-ink">
        {title}
        <span className="h-px flex-1 translate-y-[-0.3rem] bg-rule" />
      </h2>
      {children}
    </section>
  );
}
