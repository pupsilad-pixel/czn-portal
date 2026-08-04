<script setup lang="ts">
import { Calendar, Eye, ArrowRight } from "lucide-vue-next";
import type { NewsItem } from "@/shared/types";
import { cn } from "@/shared/lib/utils";
import Badge from "@/shared/ui/Badge.vue";

interface NewsCardProps {
  news: NewsItem;
  index?: number;
  featured?: boolean;
}

const props = withDefaults(defineProps<NewsCardProps>(), {
  index: 0,
  featured: false,
});

const categoryColors: Record<string, "default" | "secondary" | "accent" | "blue" | "red"> = {
  "События": "blue",
  "Обучение": "default",
  "Статистика": "secondary",
  "Поддержка": "accent",
  "Цифровизация": "blue",
};

const badgeVariant = computed(() => categoryColors[props.news.category] || "secondary");
</script>

<template>
  <article class="h-full">
    <NuxtLink
      :to="`/news/${news.id}`"
      :class="cn(
        'group flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-transparent'
      )"
    >
      <!-- Изображение -->
      <div :class="cn('relative overflow-hidden', featured ? 'h-56' : 'h-44')">
        <img
          :src="news.image"
          :alt="news.title"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div class="absolute top-3 left-3">
          <Badge :variant="badgeVariant">{{ news.category }}</Badge>
        </div>
      </div>

      <!-- Контент -->
      <div class="flex flex-col flex-1 p-5">
        <div class="flex items-center gap-3 text-xs text-[#7A96B4] mb-3">
          <span class="flex items-center gap-1">
            <Calendar class="h-3.5 w-3.5" />
            {{ news.date }}
          </span>
          <span v-if="news.views" class="flex items-center gap-1">
            <Eye class="h-3.5 w-3.5" />
            {{ news.views.toLocaleString("ru-RU") }}
          </span>
        </div>

        <h3 class="text-sm font-semibold text-[#0A1628] leading-snug group-hover:text-[#0050AA] transition-colors line-clamp-2 flex-1 mb-3">
          {{ news.title }}
        </h3>

        <p class="text-xs text-[#3A5070] leading-relaxed line-clamp-2 mb-4">
          {{ news.excerpt }}
        </p>

        <div class="flex items-center text-xs font-medium text-[#7A96B4] group-hover:text-[#0050AA] transition-colors mt-auto">
          Читать далее
          <ArrowRight class="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
