<script setup lang="ts">
import { Users, Plus, BadgeDollarSign, Calendar, FileSignature, ClipboardList, ArrowRight } from "lucide-vue-next";
import ServiceCard from "@/entities/ServiceCard.vue";
import SectionHeader from "@/shared/ui/SectionHeader.vue";
import Button from "@/shared/ui/Button.vue";

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
</script>

<template>
  <section class="py-16 md:py-24 bg-[#F4F7FB]">
    <div class="container">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeader
          title="Для работодателей"
          description="Инструменты для эффективного подбора персонала и государственной поддержки"
        />
        <Button as-child variant="outline">
          <NuxtLink to="/employers">
            Все услуги
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </Button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        <ServiceCard v-for="(service, index) in employerServices" :key="service.href" v-bind="service" :index="index" />
      </div>
    </div>
  </section>
</template>
