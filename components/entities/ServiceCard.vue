<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  href: string;
  accentColor?: string;
  index?: number;
}

withDefaults(defineProps<ServiceCardProps>(), {
  accentColor: "#0050AA",
  index: 0,
});
</script>

<template>
  <div>
    <NuxtLink
      :to="href"
      class="group relative block h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-transparent"
    >
      <div
        class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
        :style="{ backgroundColor: `${accentColor}14`, color: accentColor }"
      >
        <component :is="icon" class="h-6 w-6" />
      </div>

      <h3 class="mb-2 text-base font-semibold text-[#0A1628] leading-tight group-hover:text-[#0050AA] transition-colors">
        {{ title }}
      </h3>
      <p class="text-sm text-[#3A5070] leading-relaxed line-clamp-2">{{ description }}</p>

      <div class="mt-4 flex items-center text-xs font-medium text-[#7A96B4] group-hover:text-[#0050AA] transition-colors">
        Подробнее
        <ArrowRight class="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>

      <div
        class="absolute bottom-0 left-0 h-0.5 w-0 rounded-b-2xl transition-all duration-300 group-hover:w-full"
        :style="{ backgroundColor: accentColor }"
      />
    </NuxtLink>
  </div>
</template>
