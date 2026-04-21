import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants = {
  primary: "bg-[#22C55E] hover:bg-[#16A34A]",
  secondary: "bg-[#2046A1] hover:bg-[#1B3A85]",
  tertiary: "bg-[#F5DEA4] hover:bg-[#E7C97A]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-13 px-6 text-2xl",
          "rounded-xl",
          "font-medium text-white",
          "transition-all duration-200",
          "flex items-center justify-center",
          "shadow-md hover:shadow-lg",
          "active:scale-[0.98]",
          "cursor-pointer",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";