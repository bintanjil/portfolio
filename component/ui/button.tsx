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
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-50",
          {
            "bg-green-800 text-white shadow-soft hover:bg-green-700":
              variant === "default",
            "border border-green-200 bg-white text-green-800 hover:border-green-300 hover:bg-green-50":
              variant === "outline",
            "text-green-700 hover:bg-green-50 hover:text-green-900":
              variant === "ghost",
          },
          {
            "h-10 px-4 text-sm": size === "default",
            "h-9 px-3 text-sm": size === "sm",
            "h-12 px-6 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
