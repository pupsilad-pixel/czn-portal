<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, MessageCircle } from 'lucide-vue-next'
import { cn } from '@/shared/lib/utils'

const activeId = ref<number | null>(null)

const faqs = [
  {
    id: 1,
    question: 'Поиск работы: куда обращаться?',
    answer: 'Вы можете обратиться в любой филиал Центра занятости населения или воспользоваться порталом «Работа России». Наши специалисты помогут подобрать вакансии, соответствующие вашему опыту и квалификации.'
  },
  {
    id: 2,
    question: 'Какую помощь оказывает Центр занятости населения для эффективного трудоустройства?',
    answer: 'Мы предоставляем услуги по профессиональной ориентации, организуем психологическую поддержку, проводим программы переобучения и повышения квалификации, а также помогаем в составлении резюме и подготовке к собеседованиям.'
  }
]

const sidebarLinks = [
  { title: 'Поиск работы', href: '#', active: true },
  { title: 'Как получить статус безработного', href: '#' },
  { title: 'Пособие по безработице', href: '#' },
]

const toggle = (id: number) => {
  activeId.value = activeId.value === id ? null : id
}
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container">
      <div class="flex items-baseline justify-between mb-12 border-b border-gray-100 pb-4">
        <h2 class="text-2xl md:text-3xl font-bold text-[#0A1628]">Частые вопросы</h2>
        <NuxtLink to="/faq" class="text-sm font-medium text-[#0050AA] hover:underline">
          Все вопросы
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Аккордеон вопросов -->
        <div class="lg:col-span-8 space-y-4">
          <div 
            v-for="faq in faqs" 
            :key="faq.id"
            class="border-b border-gray-100 last:border-0 pb-4"
          >
            <button
              @click="toggle(faq.id)"
              class="flex w-full items-center justify-between py-4 text-left group transition-all"
            >
              <span 
                class="text-lg font-medium text-[#0050AA] group-hover:text-[#003D82] transition-colors leading-snug pr-8"
              >
                {{ faq.question }}
              </span>
              <ChevronDown 
                :class="cn(
                  'h-5 w-5 text-[#7A96B4] transition-transform duration-300 shrink-0',
                  activeId === faq.id && 'rotate-180'
                )" 
              />
            </button>
            <div 
              v-if="activeId === faq.id"
              class="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
            >
              <p class="pb-4 text-[#3A5070] leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>

        <!-- Правый сайдбар -->
        <div class="lg:col-span-4 lg:border-l lg:border-gray-100 lg:pl-12">
          <nav class="space-y-6">
            <div class="space-y-4">
              <NuxtLink
                v-for="link in sidebarLinks"
                :key="link.title"
                :to="link.href"
                :class="cn(
                  'block text-base transition-colors hover:text-[#0050AA]',
                  link.active ? 'text-[#0050AA] font-semibold border-l-2 border-[#0050AA] pl-4 -ml-[49px] bg-blue-50/50 py-1' : 'text-[#3A5070]'
                )"
              >
                {{ link.title }}
              </NuxtLink>
            </div>

            <div class="pt-8 border-t border-gray-100">
              <p class="text-sm font-semibold text-[#0A1628] mb-2">Не нашли ответа на свой вопрос?</p>
              <p class="text-sm text-[#3A5070] mb-4">Можете обратиться в электронную приемную центра "Моя работа"</p>
              <button class="flex items-center gap-2 text-sm font-bold text-[#0050AA] hover:text-[#003D82] transition-colors group">
                <MessageCircle class="h-4 w-4" />
                Задать свой вопрос
                <span class="block h-px w-0 bg-[#0050AA] transition-all group-hover:w-full" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
