import React from "react";
import { cn } from "@/shared/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-gray-100", className)}
      {...props}
    />
  );
}

export { Skeleton };
