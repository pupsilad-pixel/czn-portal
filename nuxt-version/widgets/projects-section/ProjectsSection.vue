<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import SectionHeader from "@/shared/ui/SectionHeader.vue";
import Button from "@/shared/ui/Button.vue";
import { mockProjects } from "@/shared/constants/mock-projects";

// Временная заглушка для карточки проекта
const ProjectCard = {
  props: ['project', 'index'],
  template: `
    <div class="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <h3 class="text-lg font-semibold text-[#0A1628] mb-2">{{ project.title }}</h3>
      <p class="text-sm text-[#3A5070] mb-4">{{ project.description }}</p>
      <div class="text-xs font-medium text-[#0050AA]">Подробнее →</div>
    </div>
  `
};
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeader
          title="Наши проекты"
          description="Государственные программы содействия занятости и профессионального развития"
        />
        <Button as-child variant="outline">
          <NuxtLink to="/projects">
            Все проекты
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </Button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        <component 
          :is="ProjectCard" 
          v-for="(project, index) in mockProjects" 
          :key="project.id" 
          :project="project" 
          :index="index" 
        />
      </div>
    </div>
  </section>
</template>
