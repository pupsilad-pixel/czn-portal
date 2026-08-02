"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, User, Phone } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { mainNavigation } from "@/shared/constants/navigation";
import type { NavItem } from "@/shared/types";

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.items) {
    return (
      <Link href={item.href} onClick={onClose} className="block px-4 py-3 text-base font-medium text-[#0A1628] hover:text-[#0050AA] hover:bg-[#F4F7FB] rounded-xl transition-colors">
        {item.title}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-[#0A1628] hover:text-[#0050AA] hover:bg-[#F4F7FB] rounded-xl transition-colors"
      >
        {item.title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#5AB4E6]/40 pl-3">
          {item.items.map((sub) => (
            <Link key={sub.href} href={sub.href} onClick={onClose} className="block px-3 py-2 text-sm text-[#3A5070] hover:text-[#0050AA] hover:bg-[#F4F7FB] rounded-lg transition-colors">
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <span className="font-semibold text-[#0A1628]">Меню</span>
          <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {mainNavigation.map((item) => (
            <MobileNavItem key={item.href} item={item} onClose={onClose} />
          ))}
        </div>

        <div className="border-t border-gray-100 p-4 space-y-3">
          <Link href="/profile" onClick={onClose} className="flex items-center gap-2 w-full justify-center rounded-xl bg-[#0050AA] px-4 py-3 text-sm font-medium text-white hover:bg-[#003D82] transition-colors">
            <User className="h-4 w-4" />
            Личный кабинет
          </Link>
          <a href="tel:88001234567" className="flex items-center gap-2 w-full justify-center rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-[#3A5070] hover:bg-gray-50 transition-colors">
            <Phone className="h-4 w-4" />
            8 800 123-45-67
          </a>
        </div>
      </div>
    </div>
  );
}
