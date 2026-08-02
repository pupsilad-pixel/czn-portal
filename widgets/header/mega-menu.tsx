"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { mainNavigation } from "@/shared/constants/navigation";
import type { NavItem } from "@/shared/types";

function MegaMenuItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!item.items) {
    return (
      <Link
        href={item.href}
        className="flex items-center gap-1 px-1 py-2 text-sm font-medium text-[#0A1628] hover:text-[#0050AA] transition-colors relative group"
      >
        {item.title}
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0050AA] transition-all duration-200 group-hover:w-full" />
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors relative group",
          open ? "text-[#0050AA]" : "text-[#0A1628] hover:text-[#0050AA]"
        )}
      >
        {item.title}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        <span className={cn("absolute bottom-0 left-0 h-0.5 bg-[#0050AA] transition-all duration-200", open ? "w-full" : "w-0 group-hover:w-full")} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-72 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-black/5">
          <div className="space-y-0.5">
            {item.items.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setOpen(false)}
                className="group flex items-start gap-3 rounded-xl p-3 hover:bg-[#F4F7FB] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#0A1628] group-hover:text-[#0050AA] transition-colors">
                      {sub.title}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  {sub.description && (
                    <p className="mt-0.5 text-xs text-[#7A96B4] line-clamp-1">{sub.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function MegaMenu() {
  return (
    <nav aria-label="Основная навигация">
      <div className="flex items-center gap-1">
        {mainNavigation.map((item) => (
          <MegaMenuItem key={item.href} item={item} />
        ))}
      </div>
    </nav>
  );
}
