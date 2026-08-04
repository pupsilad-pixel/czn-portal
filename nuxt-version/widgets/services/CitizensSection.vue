<script setup lang="ts">
import { Search, UserCheck, GraduationCap, Briefcase, Accessibility, Heart, ArrowRight } from "lucide-vue-next";
import ServiceCard from "@/entities/ServiceCard.vue";
import SectionHeader from "@/shared/ui/SectionHeader.vue";
import Button from "@/shared/ui/Button.vue";

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
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeader
          title="Для граждан"
          description="Все услуги для поиска работы и профессионального развития в одном месте"
        />
        <Button as-child variant="outline">
          <NuxtLink to="/services">
            Все услуги
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </Button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        <ServiceCard v-for="(service, index) in citizenServices" :key="service.href" v-bind="service" :index="index" />
      </div>
    </div>
  </section>
</template>
