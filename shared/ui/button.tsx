"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0050AA]/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#0050AA] text-white shadow-sm hover:bg-[#003D82] hover:shadow-md",
        destructive:
          "bg-[#E65028] text-white hover:bg-[#C43D1A]",
        outline:
          "border-2 border-[#0050AA] bg-transparent text-[#0050AA] hover:bg-[#0050AA] hover:text-white",
        secondary:
          "bg-[#F4F7FB] text-[#0050AA] border border-[#5AB4E6]/40 hover:bg-[#E8EFF8]",
        ghost:
          "text-[#0050AA] hover:bg-[#F4F7FB]",
        link:
          "text-[#0050AA] underline-offset-4 hover:underline",
        accent:
          "bg-[#E65028] text-white shadow-sm hover:bg-[#C43D1A] hover:shadow-md",
        white:
          "bg-white text-[#0050AA] shadow-sm hover:bg-[#F4F7FB] hover:shadow-md",
        dark:
          "bg-[#0A1628] text-white hover:bg-[#162340]",
        secondary_blue:
          "bg-[#5AB4E6] text-white shadow-sm hover:bg-[#3A9DD4] hover:shadow-md",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm:      "h-9 rounded-lg px-4 text-xs",
        lg:      "h-13 rounded-2xl px-8 text-base font-semibold",
        xl:      "h-14 rounded-2xl px-10 text-lg font-semibold",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
