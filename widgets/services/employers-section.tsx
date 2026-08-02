"use client";

import { Users, Plus, BadgeDollarSign, Calendar, FileSignature, ClipboardList, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/entities/service-card/service-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

const employerServices = [
  {
    title: "Подбор сотрудников",
    description: "Доступ к базе резюме. Находите подходящих кандидатов быстро и бесплатно.",
    icon: Users,
    href: "/recruitment",
    accentColor: "#0050AA",
  },
  {
    title: "Разместить вакансию",
    description: "Публикуйте вакансии на портале ЦЗН — бесплатно и без ограничений.",
    icon: Plus,
    href: "/post-vacancy",
    accentColor: "#1A65BB",
  },
  {
    title: "Государственная поддержка",
    description: "Субсидии за трудоустройство особых категорий граждан. Компенсация затрат на обучение.",
    icon: BadgeDollarSign,
    href: "/subsidies",
    accentColor: "#E65028",
  },
  {
    title: "Ярмарки вакансий",
    description: "Участвуйте в региональных мероприятиях и встречайте кандидатов лично.",
    icon: Calendar,
    href: "/job-fairs",
    accentColor: "#003D82",
  },
  {
    title: "Регистрация коллективных договоров",
    description: "Электронная регистрация и уведомительная регистрация коллективных договоров.",
    icon: FileSignature,
    href: "/collective-agreements",
    accentColor: "#3A5070",
  },
  {
    title: "Приём сведений",
    description: "Подача сведений о вакансиях и прогнозируемом высвобождении работников.",
    icon: ClipboardList,
    href: "/info-submission",
    accentColor: "#5AB4E6",
  },
];

export function EmployersSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F7FB]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            title="Для работодателей"
            description="Инструменты для эффективного подбора персонала и государственной поддержки"
          />
          <Button asChild variant="outline">
            <Link href="/employers">
              Все услуги
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {employerServices.map((service, index) => (
            <ServiceCard key={service.href} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
