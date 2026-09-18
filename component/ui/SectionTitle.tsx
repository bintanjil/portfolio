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
        <p
          className={cn(
            "mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-green-800",
            centered && "justify-center"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base text-neutral-500 sm:text-lg",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
