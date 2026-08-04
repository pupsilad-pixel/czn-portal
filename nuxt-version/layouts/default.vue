<script setup lang="ts">
import Header from '@/widgets/header/Header.vue'
import Footer from '@/widgets/footer/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
