<script setup lang="ts">
import { ref } from 'vue';
import { Glasses, Globe, User, ChevronDown } from "lucide-vue-next";
import { cn } from "@/shared/lib/utils";

const socialLinks = [
  {
    name: "Макс",
    href: "https://max.ru",
    icon: "/social/max.svg",
  },
];

const languages = [
  { code: "ru", label: "РУС" },
  { code: "tt", label: "ТАТ" },
  { code: "en", label: "ENG" },
];

const lang = ref("ru");
const langOpen = ref(false);
const currentLang = computed(() => languages.find((l) => l.code === lang.value));

const setLanguage = (code: string) => {
  lang.value = code;
  langOpen.value = false;
};
</script>

<template>
  <div class="border-b border-[#0050AA]/10 bg-[#F4F7FB]">
    <div class="container">
      <div class="flex min-h-10 items-center justify-between gap-4 py-2 text-xs text-[#3A5070]">
        <!-- Контактная информация -->
        <div class="grid w-full grid-cols-2 items-center gap-x-3 gap-y-2 sm:grid-cols-3 sm:gap-8 xl:w-auto">
          <a href="tel:+78432220557" class="group min-w-0">
            <span class="block truncate text-[11px] font-semibold text-[#23416B] group-hover:text-[#0050AA] transition-colors sm:whitespace-nowrap sm:text-xs">
              +7 (843) 222-05-57
            </span>
            <span class="hidden text-[10px] leading-tight text-[#7A96B4] sm:block">Контакт-центр</span>
          </a>
          <a href="mailto:CZN_g_Kazan@tatar.ru" class="group col-span-1 min-w-0 sm:col-span-1">
            <span class="block truncate font-semibold text-[#23416B] group-hover:text-[#0050AA] transition-colors sm:whitespace-nowrap">
              CZN_g_Kazan@tatar.ru
            </span>
            <span class="hidden text-[10px] leading-tight text-[#7A96B4] sm:block">Электронная почта</span>
          </a>
          <a href="tel:+78435641111" class="group col-span-2 min-w-0 sm:col-span-1">
            <span class="block truncate text-[11px] font-semibold text-[#23416B] group-hover:text-[#0050AA] transition-colors sm:whitespace-nowrap sm:text-xs">
              8 (843) 564-11-11 (Trud.SVO@tatar.ru)
            </span>
            <span class="hidden text-[10px] leading-tight text-[#7A96B4] sm:block">Телефон горячей линии и электронная почта для участников СВО</span>
          </a>
        </div>

        <!-- Правая часть -->
        <div class="hidden items-center gap-3 2xl:flex">
          <!-- Социальные сети -->
          <div class="hidden sm:flex items-center gap-2">
            <a
              v-for="s in socialLinks"
              :key="s.name"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.name"
              class="flex h-6 w-6 items-center justify-center rounded-full text-[#3A5070] hover:text-[#0050AA] hover:bg-[#EBF3FF] transition-all"
            >
              <img :src="s.icon" :alt="s.name" class="h-[14px] w-[14px]" />
            </a>
            <!-- VK Icon SVG directly -->
            <a href="https://vk.com" target="_blank" class="flex h-6 w-6 items-center justify-center rounded-full text-[#3A5070] hover:text-[#0050AA] hover:bg-[#EBF3FF] transition-all">
              <svg class="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.785 16.241s.288-.032.435-.193c.135-.148.131-.425.131-.425s-.019-1.297.582-1.488c.593-.189 1.354 1.253 2.161 1.806.61.418 1.073.327 1.073.327l2.157-.03s1.128-.069.593-.957c-.044-.072-.312-.652-1.6-1.85-1.349-1.253-1.169-1.05.456-3.218.989-1.32 1.384-2.125 1.262-2.47-.118-.33-.847-.243-.847-.243l-2.434.015s-.181-.025-.314.055c-.131.078-.215.262-.215.262s-.386 1.027-.901 1.901c-1.086 1.852-1.521 1.95-1.699 1.834-.413-.27-.31-1.082-.31-1.66 0-1.802.269-2.555-.522-2.751-.262-.064-.455-.107-1.126-.114-.86-.009-1.587.003-1.998.21-.263.131-.464.425-.341.442.151.021.493.092.674.341.234.32.226 1.04.226 1.04s.135 1.982-.314 2.227c-.31.17-.736-.178-1.654-1.855-.469-.857-.823-1.806-.823-1.806s-.071-.176-.2-.27c-.155-.114-.373-.15-.373-.15l-2.312.015s-.347.01-.475.161c-.114.135-.009.413-.009.413s1.812 4.243 3.864 6.382c1.881 1.96 4.018 1.832 4.018 1.832h.967z" />
              </svg>
            </a>
          </div>
          <span class="hidden sm:block h-3.5 w-px bg-gray-300" />

          <!-- Версия для слабовидящих -->
          <button
            class="hidden md:flex items-center gap-2 rounded-sm bg-[#DDEFFC] pl-2 text-[#102A43] hover:bg-[#C8E6FA] transition-colors"
            aria-label="Версия для слабовидящих"
            type="button"
          >
            <span>Для слабовидящих</span>
            <span class="flex h-9 w-12 items-center justify-center bg-[#0050AA] text-[#9CC8F2]">
              <Glasses class="h-6 w-6" strokeWidth="1.8" />
            </span>
          </button>
          <span class="hidden md:block h-3.5 w-px bg-gray-300" />

          <!-- Выбор языка -->
          <div class="relative">
            <button @click="langOpen = !langOpen" class="flex items-center gap-1 hover:text-[#0050AA] transition-colors">
              <Globe class="h-3.5 w-3.5" />
              <span>{{ currentLang?.label }}</span>
              <ChevronDown :class="cn('h-3 w-3 transition-transform', langOpen && 'rotate-180')" />
            </button>
            <div v-if="langOpen" class="absolute right-0 top-full mt-1 z-50 w-20 rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
              <button
                v-for="l in languages"
                :key="l.code"
                @click="setLanguage(l.code)"
                :class="cn('w-full px-3 py-1.5 text-left text-xs hover:bg-[#F4F7FB] transition-colors', lang === l.code && 'text-[#0050AA] font-medium')"
              >
                {{ l.label }}
              </button>
            </div>
          </div>
          <span class="h-3.5 w-px bg-gray-300" />

          <!-- Личный кабинет -->
          <a href="https://esia.gosuslugi.ru/login/" class="flex items-center gap-1.5 rounded-lg bg-[#0050AA] px-3 py-1 text-white hover:bg-[#003D82] transition-colors">
            <User class="h-3.5 w-3.5" />
            <span>Личный кабинет</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
