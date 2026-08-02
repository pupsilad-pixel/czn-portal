import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
  {
    variants: {
      variant: {
        default:   "bg-[#EBF3FF] text-[#0050AA] ring-[#5AB4E6]/40",
        secondary: "bg-gray-100 text-gray-700 ring-gray-200",
        accent:    "bg-[#FFF0EC] text-[#E65028] ring-[#E65028]/30",
        blue:      "bg-[#E8F6FD] text-[#3A9DD4] ring-[#5AB4E6]/40",
        red:       "bg-red-50 text-red-700 ring-red-200",
        outline:   "bg-transparent text-[#0050AA] ring-[#0050AA]",
        light_blue: "bg-[#5AB4E6]/10 text-[#3A9DD4] ring-[#5AB4E6]/30",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
