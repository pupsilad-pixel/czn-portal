<script setup lang="ts">
import { ref } from 'vue';
import { X, ChevronDown, User, Phone } from "lucide-vue-next";
import { cn } from "@/shared/lib/utils";
import { mainNavigation } from "@/shared/constants/navigation";

interface Props {
  isOpen: boolean;
}

defineProps<Props>();
const emit = defineEmits(['close']);

const openSubMenus = ref<Record<string, boolean>>({});

const toggleSubMenu = (href: string) => {
  openSubMenus.value[href] = !openSubMenus.value[href];
};
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 lg:hidden">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="emit('close')" />
    <div class="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col">
      <div class="flex items-center justify-between border-b border-gray-100 p-4">
        <span class="font-semibold text-[#0A1628]">Меню</span>
        <button @click="emit('close')" class="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
          <X class="h-5 w-5" />
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-4 space-y-1">
        <div v-for="item in mainNavigation" :key="item.href">
          <template v-if="!item.items">
            <NuxtLink 
              :to="item.href" 
              @click="emit('close')" 
              class="block px-4 py-3 text-base font-medium text-[#0A1628] hover:text-[#0050AA] hover:bg-[#F4F7FB] rounded-xl transition-colors"
            >
              {{ item.title }}
            </NuxtLink>
          </template>
          <template v-else>
            <div>
              <button
                @click="toggleSubMenu(item.href)"
                class="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-[#0A1628] hover:text-[#0050AA] hover:bg-[#F4F7FB] rounded-xl transition-colors"
              >
                {{ item.title }}
                <ChevronDown :class="cn('h-4 w-4 transition-transform', openSubMenus[item.href] && 'rotate-180')" />
              </button>
              <div v-if="openSubMenus[item.href]" class="ml-4 mt-1 space-y-0.5 border-l-2 border-[#5AB4E6]/40 pl-3">
                <NuxtLink 
                  v-for="sub in item.items" 
                  :key="sub.href" 
                  :to="sub.href" 
                  @click="emit('close')" 
                  class="block px-3 py-2 text-sm text-[#3A5070] hover:text-[#0050AA] hover:bg-[#F4F7FB] rounded-lg transition-colors"
                >
                  {{ sub.title }}
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="border-t border-gray-100 p-4 space-y-3">
        <a href="https://esia.gosuslugi.ru/login/" @click="emit('close')" class="flex items-center gap-2 w-full justify-center rounded-xl bg-[#0050AA] px-4 py-3 text-sm font-medium text-white hover:bg-[#003D82] transition-colors">
          <User class="h-4 w-4" />
          Личный кабинет
        </a>
        <a href="tel:88001234567" class="flex items-center gap-2 w-full justify-center rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-[#3A5070] hover:bg-gray-50 transition-colors">
          <Phone class="h-4 w-4" />
          8 800 123-45-67
        </a>
      </div>
    </div>
  </div>
</template>
