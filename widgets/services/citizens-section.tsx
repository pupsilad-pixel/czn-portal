"use client";

import { Search, UserCheck, GraduationCap, Briefcase, Accessibility, Heart, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/entities/service-card/service-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

const citizenServices = [
  {
    title: "Поиск работы",
    description: "Актуальные вакансии по всей республике. Фильтр по специальности, зарплате и городу.",
    icon: Search,
    href: "/jobs",
    accentColor: "#0050AA",
  },
  {
    title: "Постановка на учёт",
    description: "Регистрация в качестве безработного и назначение пособия по безработице.",
    icon: UserCheck,
    href: "/registration",
    accentColor: "#1A65BB",
  },
  {
    title: "Профессиональное обучение",
    description: "Бесплатные курсы переподготовки и повышения квалификации по востребованным профессиям.",
    icon: GraduationCap,
    href: "/training",
    accentColor: "#003D82",
  },
  {
    title: "Самозанятость",
    description: "Поддержка в открытии бизнеса: консультации, субсидии до 350 000 ₽, обучение.",
    icon: Briefcase,
    href: "/self-employment",
    accentColor: "#E65028",
  },
  {
    title: "Гражданам с инвалидностью",
    description: "Специальные программы трудоустройства, квотирование рабочих мест, адаптация.",
    icon: Accessibility,
    href: "/disability",
    accentColor: "#3A5070",
  },
  {
    title: "Комплексная помощь",
    description: "Психологическая поддержка, карьерное консультирование, профориентация.",
    icon: Heart,
    href: "/support",
    accentColor: "#5AB4E6",
  },
];

export function CitizensSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            title="Для граждан"
            description="Все услуги для поиска работы и профессионального развития в одном месте"
          />
          <Button asChild variant="outline">
            <Link href="/services">
              Все услуги
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {citizenServices.map((service, index) => (
            <ServiceCard key={service.href} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
