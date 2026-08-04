<script setup lang="ts">
import SectionHeader from "@/shared/ui/SectionHeader.vue";
import NewsCard from "@/entities/NewsCard.vue";
import { mockNews } from "@/shared/constants/mock-news";
</script>

<template>
  <div class="py-12">
    <div class="container">
      <SectionHeader
        title="Все новости"
        description="Последние новости и обновления Центра занятости населения Республики Татарстан"
        class="mb-10"
      />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard v-for="(news, index) in mockNews" :key="news.id" :news="news" :index="index" />
      </div>
    </div>
  </div>
</template>
