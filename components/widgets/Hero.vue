<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { 
  Briefcase, 
  Users, 
  FileText, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-vue-next'

const stats = [
  { value: 14.4, decimals: 1, suffix: " тыс.", label: "обращений с начала года" },
  { value: 7.7, decimals: 1, suffix: " тыс. (53,2%)", label: "граждан трудоустроено" },
  { value: 84.4, decimals: 1, suffix: " тыс.", label: "вакансий на платформе «Работа России»" },
  { value: 3722, suffix: " чел.", label: "численность безработных граждан" },
]

const heroActions = [
  {
    title: "Найти работу",
    description: "Более 5 000 актуальных вакансий",
    icon: Briefcase,
    href: "/jobs",
    bg: "bg-[#0050AA]",
    hover: "hover:bg-[#003D82]",
  },
  {
    title: "Найти сотрудников",
    description: "База резюме квалифицированных специалистов",
    icon: Users,
    href: "/recruitment",
    bg: "bg-[#E65028]",
    hover: "hover:bg-[#C43D1A]",
  },
  {
    title: "Получить услугу",
    description: "Электронные государственные услуги",
    icon: FileText,
    href: "/services",
    bg: "bg-[#5AB4E6]",
    hover: "hover:bg-[#3A9DD4]",
  },
  {
    title: "Подать обращение",
    description: "Консультация и помощь специалистов",
    icon: MessageSquare,
    href: "/appeals",
    bg: "bg-[#003D82]",
    hover: "hover:bg-[#0A1628]",
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-[#F4F7FB] via-white to-[#E8EFF8] py-8 md:py-12">
    <!-- Декоративные блобы -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#0050AA]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#5AB4E6]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div class="container relative">
      <!-- Заголовок и подзаголовок -->
      <div class="mx-auto max-w-3xl text-center pt-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] leading-tight">
          Центр занятости населения
          <span class="text-[#0050AA]">Республики Татарстан</span>
        </h1>

        <p class="mt-6 text-lg md:text-xl text-[#3A5070] leading-relaxed">
          Помогаем найти работу мечты, подобрать квалифицированных сотрудников
          и развивать профессиональные навыки
        </p>
      </div>

      <!-- Статистика -->
      <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        <div
          v-for="s in stats"
          :key="s.label"
          class="min-w-0 flex h-full flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
        >
          <div class="text-2xl font-bold leading-tight text-[#0050AA] sm:text-3xl">
            <AnimatedCounter :value="s.value" :decimals="s.decimals" :suffix="s.suffix" />
          </div>
          <div class="text-xs leading-snug text-[#7A96B4] sm:text-sm">{{ s.label }}</div>
        </div>
      </div>

      <!-- CTA-карточки -->
      <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="action in heroActions"
          :key="action.href"
        >
          <NuxtLink
            :to="action.href"
            class="group relative block h-full rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:p-6"
            :class="[action.bg, action.hover]"
          >
            <div class="relative z-10">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <component :is="action.icon" class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-white mb-1">{{ action.title }}</h3>
              <p class="text-sm text-white/80">{{ action.description }}</p>
              <div class="mt-4 flex items-center text-sm font-medium text-white">
                Перейти
                <ArrowRight class="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
