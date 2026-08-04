<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Search, Menu } from "lucide-vue-next";
import { cn } from "@/shared/lib/utils";
import TopBar from "./TopBar.vue";
import MegaMenu from "./MegaMenu.vue";
import MobileMenu from "./MobileMenu.vue";

interface Props {
  transparent?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  transparent: false,
});

const scrolled = ref(false);
const mobileOpen = ref(false);
const searchOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <header 
    :class="cn(
      'sticky top-0 z-40 w-full transition-all duration-300', 
      scrolled || !transparent ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
    )"
  >
    <TopBar />

    <div class="border-b border-gray-100">
      <div class="container">
        <div class="flex h-16 items-center gap-4">
          <NuxtLink
            to="/"
            @click="scrollToTop"
            class="flex h-full items-center shrink-0"
            aria-label="Работа России — на главную"
          >
            <svg
              class="h-14 w-[116px] sm:h-16 sm:w-[140px]"
              viewBox="0 0 150 205"
              role="img"
              aria-labelledby="russia-work-logo-title"
            >
              <title id="russia-work-logo-title">Работа России</title>
              <g fill="#F04423">
                <path d="M54 5 96 30 54 55Z" />
                <path d="M15 47 57 72 15 97Z" />
                <path d="m94 47 42 25-42 25Z" />
                <path d="m54 89 42 25-42 25Z" />
              </g>
              <text x="54" y="157" fill="#0755A0" font-family="Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="-1">РАБОТА</text>
              <text x="54" y="188" fill="#0755A0" font-family="Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="-1">РОССИИ</text>
            </svg>
          </NuxtLink>

          <div class="hidden lg:flex flex-1 justify-center">
            <MegaMenu />
          </div>

          <div class="flex items-center gap-2 ml-auto">
            <div v-if="searchOpen" class="relative hidden md:flex items-center">
              <input 
                autofocus 
                placeholder="Поиск по сайту..." 
                class="flex h-10 w-72 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0050AA]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                @blur="searchOpen = false" 
              />
              <Search class="absolute right-3 h-4 w-4 text-[#7A96B4]" />
            </div>
            <button
              v-else
              @click="searchOpen = true"
              class="hidden md:flex h-9 w-9 items-center justify-center rounded-xl text-[#3A5070] hover:bg-[#F4F7FB] hover:text-[#0050AA] transition-colors"
              aria-label="Поиск"
            >
              <Search class="h-4.5 w-4.5" />
            </button>
            <button
              @click="mobileOpen = true"
              class="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl text-[#3A5070] hover:bg-[#F4F7FB] transition-colors"
              aria-label="Открыть меню"
            >
              <Menu class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <MobileMenu :is-open="mobileOpen" @close="mobileOpen = false" />
</template>
