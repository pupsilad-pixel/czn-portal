"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase, Users, FileText, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  suffix: string;
}

function AnimatedCounter({ value, decimals = 0, suffix }: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(value * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <>
      {currentValue.toLocaleString("ru-RU", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

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
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0 space-y-6"
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
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 pt-6 border-t border-gray-200 sm:grid-cols-4 sm:gap-5">
              {[
                { value: 14.4, decimals: 1, suffix: " тыс.", label: "обращений с начала года" },
                { value: 7.7, decimals: 1, suffix: " тыс. (53,2%)", label: "граждан трудоустроено" },
                { value: 84.4, decimals: 1, suffix: " тыс.", label: "вакансий на платформе «Работа России»" },
                { value: 3722, suffix: " чел.", label: "численность безработных граждан" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="min-w-0"
                >
                  <div className="text-2xl font-bold leading-tight text-[#0050AA] sm:text-3xl">
                    <AnimatedCounter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </div>
                  <div className="text-xs leading-snug text-[#7A96B4] sm:text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA-карточки */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
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
                      "group relative block h-full rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:p-6",
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
