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
              {/* Логотип «Работа России» */}
              <Link href="/" className="flex h-full items-center shrink-0" aria-label="Работа России — на главную">
                <svg
                  className="h-14 w-[116px] sm:h-16 sm:w-[140px]"
                  viewBox="0 0 150 205"
                  role="img"
                  aria-labelledby="russia-work-logo-title"
                >
                  <title id="russia-work-logo-title">Работа России</title>
                  <g fill="#F04423">
                    <path d="M54 5 96 30 54 55Z" />
                    <path d="M15 47 57 72 15 97Z" />
                    <path d="m94 47 42 25-42 25Z" />
                    <path d="m54 89 42 25-42 25Z" />
                  </g>
                  <text x="54" y="157" fill="#0755A0" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="700" letterSpacing="-1">РАБОТА</text>
                  <text x="54" y="188" fill="#0755A0" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="700" letterSpacing="-1">РОССИИ</text>
                </svg>
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
