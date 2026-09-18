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
          "bg-green-800 text-white": variant === "default",
          "border border-green-100 bg-green-50 text-green-800":
            variant === "secondary",
          "border border-green-200 text-green-800": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
