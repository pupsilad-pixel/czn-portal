<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="py-12">
    <div class="container">
      <NuxtLink to="/news" class="text-sm text-[#0050AA] hover:underline mb-4 inline-block">← Назад к новостям</NuxtLink>
      <h1 class="text-3xl font-bold mb-6">Новость #{{ route.params.id }}</h1>
      <div class="bg-gray-100 h-64 rounded-2xl mb-8 flex items-center justify-center text-gray-400">
        Изображение новости
      </div>
      <div class="prose max-w-none">
        <p>Содержимое новости будет загружено здесь...</p>
      </div>
    </div>
  </div>
</template>
