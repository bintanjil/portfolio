import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center mx-auto",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-100">
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}