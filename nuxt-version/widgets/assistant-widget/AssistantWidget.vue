<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MessageSquare, X, Send, User, Bot, ArrowRight, Sparkles } from "lucide-vue-next";
import { cn } from "@/shared/lib/utils";

const isOpen = ref(false);
const message = ref("");

const quickActions = [
  { id: "jobs", label: "Найти работу", icon: "Search" },
  { id: "services", label: "Госуслуги", icon: "FileText" },
  { id: "support", label: "Помощь", icon: "HelpCircle" },
];

const toggleWidget = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    <!-- Окно ассистента -->
    <div
      v-if="isOpen"
      class="mb-4 flex h-[520px] w-[360px] flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl transition-all duration-300 sm:w-[400px]"
    >
      <!-- Шапка -->
      <div class="bg-[#0050AA] p-5 text-white">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Bot class="h-6 w-6" />
            </div>
            <div>
              <div class="text-sm font-bold">Цифровой помощник</div>
              <div class="flex items-center gap-1.5 text-[10px] text-white/70">
                <span class="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Онлайн
              </div>
            </div>
          </div>
          <button @click="toggleWidget" class="rounded-lg p-1 hover:bg-white/10 transition-colors">
            <X class="h-5 w-5" />
          </button>
        </div>
        <p class="text-xs text-white/80 leading-relaxed">
          Здравствуйте! Я помогу вам найти работу, сотрудников или отвечу на вопросы о услугах ЦЗН.
        </p>
      </div>

      <!-- Сообщения -->
      <div class="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
        <div class="flex gap-3">
          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0050AA] text-white">
            <Bot class="h-4.5 w-4.5" />
          </div>
          <div class="rounded-2xl rounded-tl-none bg-white p-3 text-sm text-[#0A1628] shadow-sm border border-gray-100">
            Чем я могу вам помочь сегодня? Выберите действие или напишите свой вопрос.
          </div>
        </div>

        <!-- Быстрые действия -->
        <div class="grid grid-cols-1 gap-2 ml-11">
          <button
            v-for="action in quickActions"
            :key="action.id"
            class="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-2.5 text-xs font-medium text-[#3A5070] transition-all hover:border-[#0050AA] hover:bg-[#F4F7FB] hover:text-[#0050AA] text-left group"
          >
            {{ action.label }}
            <ArrowRight class="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      <!-- Ввод сообщения -->
      <div class="border-t border-gray-100 p-4 bg-white">
        <div class="relative flex items-center">
          <input
            v-model="message"
            placeholder="Напишите ваш вопрос..."
            class="w-full rounded-xl bg-[#F4F7FB] py-3 pl-4 pr-12 text-sm text-[#0A1628] placeholder:text-[#7A96B4] focus:outline-none focus:ring-2 focus:ring-[#0050AA]/20"
            @keyup.enter="message = ''"
          />
          <button
            @click="message = ''"
            class="absolute right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0050AA] text-white transition-transform hover:scale-105 active:scale-95"
          >
            <Send class="h-4 w-4" />
          </button>
        </div>
        <div class="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#7A96B4]">
          <Sparkles class="h-3 w-3 text-[#E65028]" />
          Работает на базе ИИ
        </div>
      </div>
    </div>

    <!-- Кнопка вызова -->
    <button
      @click="toggleWidget"
      class="group flex h-14 w-14 items-center justify-center rounded-full bg-[#0050AA] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#003D82] active:scale-95"
      :aria-label="isOpen ? 'Закрыть ассистента' : 'Открыть ассистента'"
    >
      <X v-if="isOpen" class="h-6 w-6" />
      <MessageSquare v-else class="h-6 w-6" />
      
      <!-- Тултип -->
      <div v-if="!isOpen" class="absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0A1628] px-3 py-1.5 text-xs font-medium text-white shadow-lg group-hover:block">
        Есть вопросы? Я помогу!
        <div class="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[#0A1628]" />
      </div>
    </button>
  </div>
</template>
