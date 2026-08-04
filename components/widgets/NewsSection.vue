<script setup lang="ts">
import { ref, computed } from "vue";
import { ArrowRight } from "lucide-vue-next";
import { cn } from "@/shared/lib/utils";
import { mockNews } from "@/shared/constants/mock-news";

const categories = ["Все", "События", "Обучение", "Статистика", "Поддержка", "Цифровизация"];
const activeCategory = ref("Все");

const filtered = computed(() =>
  activeCategory.value === "Все"
    ? mockNews.slice(0, 6)
    : mockNews.filter((n) => n.category === activeCategory.value).slice(0, 6)
);
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <SectionHeader
          title="Новости и события"
          description="Актуальная информация о рынке труда, новых программах и мероприятиях"
        />
        <Button as-child variant="outline">
          <NuxtLink to="/news">
            Все новости
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </Button>
      </div>

      <!-- Фильтр по категориям -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="cn(
            'rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200',
            activeCategory === cat
              ? 'bg-[#0050AA] text-white shadow-sm'
              : 'bg-[#F4F7FB] text-[#3A5070] hover:bg-[#EBF3FF] hover:text-[#0050AA]'
          )"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Сетка новостей -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <NewsCard v-for="(news, index) in filtered" :key="news.id" :news="news" :index="index" />
      </div>
    </div>
  </section>
</template>
