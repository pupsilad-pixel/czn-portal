<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="py-12">
    <div class="container">
      <NuxtLink to="/jobs" class="text-sm text-[#0050AA] hover:underline mb-4 inline-block">← Назад к вакансиям</NuxtLink>
      <h1 class="text-3xl font-bold mb-6">Вакансия #{{ route.params.id }}</h1>
      <div class="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
        <p>Детальная информация о вакансии будет здесь...</p>
      </div>
    </div>
  </div>
</template>
