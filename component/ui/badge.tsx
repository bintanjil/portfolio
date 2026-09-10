import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export default function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        {
          "bg-indigo-600 text-white": variant === "default",
          "border border-stone-200 bg-stone-100 text-stone-700":
            variant === "secondary",
          "border border-stone-300 text-stone-700": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
