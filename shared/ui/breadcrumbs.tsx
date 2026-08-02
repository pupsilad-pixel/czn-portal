import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Навигация по разделам"
      className={cn("flex items-center gap-1.5 text-sm text-[#3A5070]", className)}
    >
      <Link href="/" className="flex items-center gap-1 hover:text-[#0050AA] transition-colors">
        <Home className="h-3.5 w-3.5" />
        <span>Главная</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#0050AA] transition-colors">
              {item.title}
            </Link>
          ) : (
            <span className="text-[#0A1628] font-medium">{item.title}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
