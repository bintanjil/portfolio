import { skills } from "@/data/skills";

export default function TechMarquee() {
  const items = skills.flatMap((group) => group.items);
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee gap-3">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
