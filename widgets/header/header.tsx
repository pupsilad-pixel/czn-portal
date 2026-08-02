"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { TopBar } from "./top-bar";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import { Input } from "@/shared/ui/input";

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={cn("sticky top-0 z-40 w-full transition-all duration-300", scrolled || !transparent ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white")}>
        <TopBar />

        <div className="border-b border-gray-100">
          <div className="container">
            <div className="flex h-16 items-center gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0050AA]">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-bold leading-none text-[#0A1628]">ЦЗН РТ</div>
                  <div className="text-xs leading-tight text-[#3A5070] mt-0.5">Центр занятости населения</div>
                </div>
              </Link>

              {/* Mega Menu */}
              <div className="hidden lg:flex flex-1 justify-center">
                <MegaMenu />
              </div>

              {/* Right controls */}
              <div className="flex items-center gap-2 ml-auto">
                {searchOpen ? (
                  <div className="relative hidden md:flex items-center">
                    <Input autoFocus placeholder="Поиск по сайту..." className="w-72 pr-10" onBlur={() => setSearchOpen(false)} />
                    <Search className="absolute right-3 h-4 w-4 text-[#7A96B4]" />
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="hidden md:flex h-9 w-9 items-center justify-center rounded-xl text-[#3A5070] hover:bg-[#F4F7FB] hover:text-[#0050AA] transition-colors"
                    aria-label="Поиск"
                  >
                    <Search className="h-4.5 w-4.5" />
                  </button>
                )}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl text-[#3A5070] hover:bg-[#F4F7FB] transition-colors"
                  aria-label="Открыть меню"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
