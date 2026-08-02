"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Eye, Globe, User, ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const socialLinks = [
  {
    name: "Макс",
    href: "#",
    icon: (
      <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.84 9.437.5.092.683-.217.683-.481 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1 .22-1.58.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.25.38-.51 1.07-.78 4.2-1.82 7.01-3.02 8.42-3.58 4.02-1.61 4.86-1.89 5.41-1.89.12 0 .39.03.56.17.14.12.18.28.2.45-.01.07-.01.21-.02.27z" />
      </svg>
    ),
  },
  {
    name: "Госуслуги",
    href: "https://gosuslugi.ru",
    icon: (
      <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9L16 12l-5 4.5z" />
      </svg>
    ),
  },
];

const languages = [
  { code: "ru", label: "РУС" },
  { code: "tt", label: "ТАТ" },
  { code: "en", label: "ENG" },
];

export function TopBar() {
  const [lang, setLang] = useState("ru");
  const [langOpen, setLangOpen] = useState(false);
  const currentLang = languages.find((l) => l.code === lang);

  return (
    <div className="border-b border-[#0050AA]/10 bg-[#F4F7FB]">
      <div className="container">
        <div className="flex h-10 items-center justify-between text-xs text-[#3A5070]">
          {/* Левая часть */}
          <div className="flex items-center gap-4">
            <Link href="tel:88001234567" className="flex items-center gap-1.5 hover:text-[#0050AA] transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>8 800 123-45-67</span>
              <span className="text-[#7A96B4]">(бесплатно)</span>
            </Link>
            <span className="h-3.5 w-px bg-gray-300" />
            <Link href="/contacts" className="hover:text-[#0050AA] transition-colors">
              Контакты
            </Link>
          </div>

          {/* Правая часть */}
          <div className="flex items-center gap-3">
            {/* Социальные сети */}
            <div className="hidden sm:flex items-center gap-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-6 w-6 items-center justify-center rounded-full text-[#3A5070] hover:text-[#0050AA] hover:bg-[#EBF3FF] transition-all"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
            <span className="hidden sm:block h-3.5 w-px bg-gray-300" />

            {/* Версия для слабовидящих */}
            <button className="hidden md:flex items-center gap-1.5 hover:text-[#0050AA] transition-colors" aria-label="Версия для слабовидящих">
              <Eye className="h-3.5 w-3.5" />
              <span>Для слабовидящих</span>
            </button>
            <span className="hidden md:block h-3.5 w-px bg-gray-300" />

            {/* Выбор языка */}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 hover:text-[#0050AA] transition-colors">
                <Globe className="h-3.5 w-3.5" />
                <span>{currentLang?.label}</span>
                <ChevronDown className={cn("h-3 w-3 transition-transform", langOpen && "rotate-180")} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 z-50 w-20 rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={cn("w-full px-3 py-1.5 text-left text-xs hover:bg-[#F4F7FB] transition-colors", lang === l.code && "text-[#0050AA] font-medium")}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className="h-3.5 w-px bg-gray-300" />

            {/* Личный кабинет */}
            <Link href="/profile" className="flex items-center gap-1.5 rounded-lg bg-[#0050AA] px-3 py-1 text-white hover:bg-[#003D82] transition-colors">
              <User className="h-3.5 w-3.5" />
              <span>Войти</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
