<script setup lang="ts">
import { Calendar, MapPin, ArrowRight } from "lucide-vue-next";
import type { EventItem } from "@/shared/types";
import Badge from "@/shared/ui/Badge.vue";

interface EventCardProps {
  event: EventItem;
  index?: number;
}

const props = withDefaults(defineProps<EventCardProps>(), {
  index: 0,
});

const typeColors: Record<string, "default" | "secondary" | "accent" | "blue"> = {
  "Ярмарка вакансий": "blue",
  "Открытые двери": "default",
  "Мастер-класс": "accent",
  "Семинар": "secondary",
};

const badgeVariant = computed(() => typeColors[props.event.type] || "secondary");
</script>

<template>
  <article>
    <NuxtLink
      :to="`/events/${event.id}`"
      class="group flex flex-col md:flex-row gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent"
    >
      <!-- Изображение -->
      <div class="relative h-40 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-xl">
        <img
          :src="event.image"
          :alt="event.title"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <!-- Контент -->
      <div class="flex flex-col flex-1 min-w-0">
        <div class="mb-2">
          <Badge :variant="badgeVariant">{{ event.type }}</Badge>
        </div>

        <h3 class="text-base font-semibold text-[#0A1628] leading-snug group-hover:text-[#0050AA] transition-colors mb-2">
          {{ event.title }}
        </h3>

        <p class="text-sm text-[#3A5070] leading-relaxed line-clamp-2 mb-4">
          {{ event.description }}
        </p>

        <div class="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#7A96B4] mt-auto">
          <span class="flex items-center gap-1.5">
            <Calendar class="h-3.5 w-3.5 text-[#5AB4E6]" />
            {{ event.date }}
          </span>
          <span class="flex items-center gap-1.5">
            <MapPin class="h-3.5 w-3.5 text-[#5AB4E6]" />
            {{ event.location }}
          </span>
        </div>

        <div class="flex items-center text-xs font-medium text-[#7A96B4] group-hover:text-[#0050AA] transition-colors mt-3">
          Подробнее о событии
          <ArrowRight class="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
