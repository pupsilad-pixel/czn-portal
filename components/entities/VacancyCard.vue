<script setup lang="ts">
import { MapPin, Clock, ArrowRight } from "lucide-vue-next";
import type { VacancyItem } from "@/shared/types";

interface VacancyCardProps {
  vacancy: VacancyItem;
  index?: number;
}

withDefaults(defineProps<VacancyCardProps>(), {
  index: 0,
});
</script>

<template>
  <article>
    <div class="group rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent hover:-translate-y-0.5">
      <!-- Заголовок и зарплата -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div class="flex-1 min-w-0">
          <NuxtLink
            :to="`/jobs/${vacancy.id}`"
            class="text-base md:text-lg font-semibold text-[#0A1628] hover:text-[#0050AA] transition-colors line-clamp-2"
          >
            {{ vacancy.title }}
          </NuxtLink>
          <div class="text-sm text-[#3A5070] mt-1">{{ vacancy.company }}</div>
        </div>
        <div class="text-lg md:text-xl font-bold text-[#0050AA] shrink-0">
          {{ vacancy.salary }}
        </div>
      </div>

      <!-- Описание -->
      <p class="text-sm text-[#3A5070] leading-relaxed line-clamp-2 mb-4">
        {{ vacancy.description }}
      </p>

      <!-- Метаданные -->
      <div class="flex flex-wrap gap-2 mb-4">
        <Badge variant="default">{{ vacancy.employment }}</Badge>
        <Badge variant="secondary">{{ vacancy.experience }}</Badge>
      </div>

      <!-- Нижняя информация -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-100">
        <div class="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#7A96B4]">
          <span class="flex items-center gap-1.5">
            <MapPin class="h-3.5 w-3.5" />
            {{ vacancy.location }}
          </span>
          <span class="flex items-center gap-1.5">
            <Clock class="h-3.5 w-3.5" />
            {{ vacancy.publishedDate }}
          </span>
        </div>
        <Button as-child variant="ghost" size="sm">
          <NuxtLink :to="`/jobs/${vacancy.id}`">
            Подробнее
            <ArrowRight class="ml-1 h-3.5 w-3.5" />
          </NuxtLink>
        </Button>
      </div>
    </div>
  </article>
</template>
