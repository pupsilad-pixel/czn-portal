<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronDown, ArrowRight } from "lucide-vue-next";
import { cn } from "@/shared/lib/utils";
import { mainNavigation } from "@/shared/constants/navigation";
import type { NavItem } from "@/shared/types";

const activeItem = ref<string | null>(null);
const menuRef = ref<HTMLElement | null>(null);

const handleClickOutside = (e: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(e.target as Node)) {
    activeItem.value = null;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});

const toggleItem = (href: string) => {
  activeItem.value = activeItem.value === href ? null : href;
};
</script>

<template>
  <nav aria-label="Основная навигация" ref="menuRef">
    <div class="flex items-center gap-1">
      <div v-for="item in mainNavigation" :key="item.href" class="relative">
        <template v-if="!item.items">
          <NuxtLink
            :to="item.href"
            class="flex items-center gap-1 px-1 py-2 text-sm font-medium text-[#0A1628] hover:text-[#0050AA] transition-colors relative group"
          >
            {{ item.title }}
            <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0050AA] transition-all duration-200 group-hover:w-full" />
          </NuxtLink>
        </template>
        
        <template v-else>
          <div 
            class="relative" 
            @mouseenter="activeItem = item.href" 
            @mouseleave="activeItem = null"
          >
            <button
              @click="toggleItem(item.href)"
              :class="cn(
                'flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors relative group',
                activeItem === item.href ? 'text-[#0050AA]' : 'text-[#0A1628] hover:text-[#0050AA]'
              )"
            >
              {{ item.title }}
              <ChevronDown :class="cn('h-3.5 w-3.5 transition-transform', activeItem === item.href && 'rotate-180')" />
              <span :class="cn('absolute bottom-0 left-0 h-0.5 bg-[#0050AA] transition-all duration-200', activeItem === item.href ? 'w-full' : 'w-0 group-hover:w-full')" />
            </button>

            <div 
              v-if="activeItem === item.href" 
              class="absolute left-0 top-full z-50 mt-1 w-72 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-black/5"
            >
              <div class="space-y-0.5">
                <NuxtLink
                  v-for="sub in item.items"
                  :key="sub.href"
                  :to="sub.href"
                  @click="activeItem = null"
                  class="group flex items-start gap-3 rounded-xl p-3 hover:bg-[#F4F7FB] transition-colors"
                >
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <span class="text-sm font-medium text-[#0A1628] group-hover:text-[#0050AA] transition-colors">
                        {{ sub.title }}
                      </span>
                      <ArrowRight class="h-3.5 w-3.5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p v-if="sub.description" class="mt-0.5 text-xs text-[#7A96B4] line-clamp-1">
                      {{ sub.description }}
                    </p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>
