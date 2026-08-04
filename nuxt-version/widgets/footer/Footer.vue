<script setup lang="ts">
import { footerNavigation } from "@/shared/constants/navigation";
import { Phone, Mail, MapPin } from "lucide-vue-next";

const currentYear = new Date().getFullYear();

const socialLinks = [
  { name: "Макс", href: "https://max.ru", icon: "/social/max.svg" },
];
</script>

<template>
  <footer class="bg-[#0A1628] text-white">
    <!-- Основной контент -->
    <div class="container py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        <!-- О центре -->
        <div class="lg:col-span-4">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0050AA]">
              <svg
                class="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div class="text-base font-bold leading-none">ЦЗН РТ</div>
              <div class="text-xs text-white/70 mt-1">
                Центр занятости населения
              </div>
            </div>
          </div>
          <p class="text-sm text-white/70 leading-relaxed mb-6">
            Государственное казённое учреждение «Центр занятости населения Республики
            Татарстан». Содействие занятости населения с 1991 года.
          </p>

          <!-- Контакты -->
          <div class="space-y-2.5">
            <a
              href="tel:88001234567"
              class="flex items-start gap-2.5 text-sm text-white/80 hover:text-white transition-colors group"
            >
              <Phone class="h-4 w-4 mt-0.5 text-[#5AB4E6] group-hover:text-[#7DC5ED]" />
              <div>
                <div>8 800 123-45-67</div>
                <div class="text-xs text-white/50">бесплатно по России</div>
              </div>
            </a>
            <a
              href="mailto:info@czn-rt.ru"
              class="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors group"
            >
              <Mail class="h-4 w-4 text-[#5AB4E6] group-hover:text-[#7DC5ED]" />
              info@czn-rt.ru
            </a>
            <div class="flex items-start gap-2.5 text-sm text-white/70">
              <MapPin class="h-4 w-4 mt-0.5 text-[#5AB4E6]" />
              <div>
                420012, г. Казань,
                <br />
                ул. Красина, д. 5
              </div>
            </div>
          </div>
        </div>

        <!-- Навигация — Гражданам -->
        <div class="lg:col-span-2">
          <h3 class="text-sm font-semibold mb-4">Гражданам</h3>
          <ul class="space-y-2">
            <li v-for="link in footerNavigation.citizens" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-sm text-white/70 hover:text-white transition-colors"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Навигация — Работодателям -->
        <div class="lg:col-span-2">
          <h3 class="text-sm font-semibold mb-4">Работодателям</h3>
          <ul class="space-y-2">
            <li v-for="link in footerNavigation.employers" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-sm text-white/70 hover:text-white transition-colors"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Навигация — Сервисы -->
        <div class="lg:col-span-2">
          <h3 class="text-sm font-semibold mb-4">Сервисы</h3>
          <ul class="space-y-2">
            <li v-for="link in footerNavigation.services" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-sm text-white/70 hover:text-white transition-colors"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Навигация — О центре -->
        <div class="lg:col-span-2">
          <h3 class="text-sm font-semibold mb-4">О центре</h3>
          <ul class="space-y-2">
            <li v-for="link in footerNavigation.about" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-sm text-white/70 hover:text-white transition-colors"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Социальные сети -->
      <div class="mt-10 pt-8 border-t border-white/10">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/60 hover:bg-[#0050AA] hover:text-white transition-all"
              :aria-label="social.name"
            >
              <img :src="social.icon" :alt="social.name" class="h-4 w-4" />
            </a>
            <!-- VK Icon SVG -->
            <a href="https://vk.com" target="_blank" class="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/60 hover:bg-[#0050AA] hover:text-white transition-all">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.785 16.241s.288-.032.435-.193c.135-.148.131-.425.131-.425s-.019-1.297.582-1.488c.593-.189 1.354 1.253 2.161 1.806.61.418 1.073.327 1.073.327l2.157-.03s1.128-.069.593-.957c-.044-.072-.312-.652-1.6-1.85-1.349-1.253-1.169-1.05.456-3.218.989-1.32 1.384-2.125 1.262-2.47-.118-.33-.847-.243-.847-.243l-2.434.015s-.181-.025-.314.055c-.131.078-.215.262-.215.262s-.386 1.027-.901 1.901c-1.086 1.852-1.521 1.95-1.699 1.834-.413-.27-.31-1.082-.31-1.66 0-1.802.269-2.555-.522-2.751-.262-.064-.455-.107-1.126-.114-.86-.009-1.587.003-1.998.21-.263.131-.464.425-.341.442.151.021.493.092.674.341.234.32.226 1.04.226 1.04s.135 1.982-.314 2.227c-.31.17-.736-.178-1.654-1.855-.469-.857-.823-1.806-.823-1.806s-.071-.176-.2-.27c-.155-.114-.373-.15-.373-.15l-2.312.015s-.347.01-.475.161c-.114.135-.009.413-.009.413s1.812 4.243 3.864 6.382c1.881 1.96 4.018 1.832 4.018 1.832h.967z" />
              </svg>
            </a>
          </div>
          <div class="text-xs text-white/50">
            Присоединяйтесь к нам в социальных сетях
          </div>
        </div>
      </div>
    </div>

    <!-- Нижняя панель -->
    <div class="border-t border-white/10 bg-black/20">
      <div class="container py-5">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <div>
            © {{ currentYear }} ГКУ «Центр занятости населения Республики Татарстан». Все
            права защищены.
          </div>
          <div class="flex flex-wrap items-center gap-4">
            <NuxtLink to="/privacy" class="hover:text-white/70 transition-colors">
              Политика конфиденциальности
            </NuxtLink>
            <NuxtLink to="/sitemap" class="hover:text-white/70 transition-colors">
              Карта сайта
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
