<script setup lang="ts">
import { cn } from "@/shared/lib/utils";

interface Props {
  class?: string;
}

defineProps<Props>();
</script>

<template>
  <h3 :class="cn('font-semibold leading-tight tracking-tight text-[#0A1628]', $props.class)">
    <slot />
  </h3>
</template>
