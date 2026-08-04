<script setup lang="ts">
import { cn } from "@/shared/lib/utils";

interface Props {
  class?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="cn(
      'rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200',
      $props.class
    )"
  >
    <slot />
  </div>
</template>
