import React from "react";
import { cn } from "@/shared/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ title, description, action, className, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-2", centered && "items-center text-center", className)}>
      <h2 className="text-2xl font-bold text-[#0A1628] md:text-3xl lg:text-4xl leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[#3A5070] text-base md:text-lg max-w-2xl">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
