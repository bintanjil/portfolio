import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group active:scale-95",
          {
            "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/50 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-20 before:transition-opacity":
              variant === "default",
            "border-2 border-slate-700 bg-slate-900/50 text-slate-100 hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/20 hover:-translate-y-0.5":
              variant === "outline",
            "hover:bg-indigo-950/50 hover:text-indigo-400 text-slate-300":
              variant === "ghost",
          },
          {
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-9 px-3 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;