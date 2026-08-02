"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, FileText, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

const heroActions = [
  {
    title: "Найти работу",
    description: "Более 5 000 актуальных вакансий",
    icon: Briefcase,
    href: "/jobs",
    bg: "bg-[#0050AA]",
    hover: "hover:bg-[#003D82]",
  },
  {
    title: "Найти сотрудников",
    description: "База резюме квалифицированных специалистов",
    icon: Users,
    href: "/recruitment",
    bg: "bg-[#E65028]",
    hover: "hover:bg-[#C43D1A]",
  },
  {
    title: "Получить услугу",
    description: "Электронные государственные услуги",
    icon: FileText,
    href: "/services",
    bg: "bg-[#5AB4E6]",
    hover: "hover:bg-[#3A9DD4]",
  },
  {
    title: "Подать обращение",
    description: "Консультация и помощь специалистов",
    icon: MessageSquare,
    href: "/appeals",
    bg: "bg-[#003D82]",
    hover: "hover:bg-[#0A1628]",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F7FB] via-white to-[#E8EFF8] py-8 md:py-12">
      {/* Декоративные блобы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0050AA]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5AB4E6]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] leading-tight pt-4">
              Центр занятости населения{" "}
              <span className="text-[#0050AA]">Республики Татарстан</span>
            </h1>

            <p className="text-lg md:text-xl text-[#3A5070] leading-relaxed max-w-xl">
              Помогаем найти работу мечты, подобрать квалифицированных сотрудников
              и развивать профессиональные навыки
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg">
                <Link href="/jobs">
                  Найти работу
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">О центре</Link>
              </Button>
            </div>

            {/* Статистика */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-200">
              {[
                { value: "5 000+", label: "Актуальных вакансий" },
                { value: "0,4%",   label: "Уровень безработицы" },
                { value: "12 000+",label: "Граждан трудоустроено" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-[#0050AA]">{s.value}</div>
                  <div className="text-sm text-[#7A96B4]">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA-карточки */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {heroActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={action.href}
                    className={cn(
                      "group relative block rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                      action.bg, action.hover
                    )}
                  >
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{action.title}</h3>
                      <p className="text-sm text-white/80">{action.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-white">
                        Перейти
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
