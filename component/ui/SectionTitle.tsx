import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 h-1 w-14 rounded-full bg-indigo-600",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base text-stone-500 sm:text-lg",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
