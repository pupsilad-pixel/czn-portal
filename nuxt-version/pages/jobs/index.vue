<script setup lang="ts">
import SectionHeader from "@/shared/ui/SectionHeader.vue";
import VacancyCard from "@/entities/VacancyCard.vue";
import { mockVacancies } from "@/shared/constants/mock-vacancies";
</script>

<template>
  <div class="py-12">
    <div class="container">
      <SectionHeader
        title="Вакансии"
        description="Актуальные предложения о работе в Республике Татарстан"
        class="mb-10"
      />
      <div class="grid grid-cols-1 gap-4">
        <VacancyCard v-for="(vacancy, index) in mockVacancies" :key="vacancy.id" :vacancy="vacancy" :index="index" />
      </div>
    </div>
  </div>
</template>
