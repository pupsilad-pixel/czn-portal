<script setup lang="ts">
import { cn } from "@/shared/lib/utils";

interface Props {
  title: string;
  description?: string;
  centered?: boolean;
  class?: string;
}

withDefaults(defineProps<Props>(), {
  centered: false,
});
</script>

<template>
  <div :class="cn('flex flex-col gap-2', centered && 'items-center text-center', $props.class)">
    <h2 class="text-2xl font-bold text-[#0A1628] md:text-3xl lg:text-4xl leading-tight">
      {{ title }}
    </h2>
    <p v-if="description" class="text-[#3A5070] text-base md:text-lg max-w-2xl">
      {{ description }}
    </p>
    <div v-if="$slots.action" class="mt-2">
      <slot name="action" />
    </div>
  </div>
</template>
