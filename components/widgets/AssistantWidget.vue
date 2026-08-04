<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  MessageSquare, 
  X, 
  Send, 
  UserRound, 
  Sparkles,
  ClipboardList,
  GraduationCap,
  Briefcase,
  Search,
  Users,
  Wallet,
  Coins
} from "lucide-vue-next";
import { cn } from "@/shared/lib/utils";

const isOpen = ref(false);
const showWelcome = ref(false);
const message = ref("");

onMounted(() => {
  // Показываем приветственное сообщение через 1.5 секунды после загрузки
  setTimeout(() => {
    if (!isOpen.value) {
      showWelcome.value = true;
    }
  }, 1500);

  // Скрываем приветствие через 8 секунд, если пользователь не открыл чат
  setTimeout(() => {
    showWelcome.value = false;
  }, 9500);
});

const quickActions = [
  { id: "accounting", label: "Учёт в центре занятости", icon: ClipboardList },
  { id: "profession", label: "Получение новой профессии", icon: GraduationCap },
  { id: "business", label: "Открытие своего дела", icon: Briefcase },
  { id: "subsidies", label: "Субсидии", icon: Coins, active: true },
  { id: "employment", label: "Устройство на работу", icon: Search },
  { id: "payments", label: "Выплаты", icon: Wallet },
  { id: "employers", label: "Поддержка работодателей", icon: Users },
];

const toggleWidget = () => {
  isOpen.value = !isOpen.value;
  showWelcome.value = false;
};
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    <!-- Окно ассистента -->
    <div
      v-if="isOpen"
      class="mb-4 flex h-[600px] w-[360px] flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl transition-all duration-300 sm:w-[450px]"
    >
      <!-- Шапка -->
      <div class="bg-[#0050AA] p-5 text-white">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm relative overflow-hidden">
              <UserRound class="h-6 w-6 relative z-10 translate-y-0.5" />
              <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
            </div>
            <div>
              <div class="text-sm font-bold">Лилия</div>
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
          Здравствуйте! Я Лилия, ваш цифровой помощник. Я помогу вам найти работу, получить субсидии или ответить на вопросы о услугах ЦЗН.
        </p>
      </div>

      <!-- Сообщения -->
      <div class="flex-1 overflow-y-auto p-5 space-y-6 bg-gray-50/50">
        <div class="flex gap-3">
          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0050AA] text-white overflow-hidden border border-blue-400/20">
            <UserRound class="h-5 w-5 translate-y-0.5" />
          </div>
          <div class="rounded-2xl rounded-tl-none bg-white p-3 text-sm text-[#0A1628] shadow-sm border border-gray-100">
            Чем я могу вам помочь сегодня? Выберите тему или введите сообщение.
          </div>
        </div>

        <!-- Быстрые действия (Кнопки из ТЗ) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-11">
          <button
            v-for="action in quickActions"
            :key="action.id"
            :class="cn(
              'flex items-center gap-2.5 rounded-xl border px-4 py-3 text-xs font-medium transition-all text-left shadow-sm',
              action.active 
                ? 'border-blue-500 bg-blue-50 text-[#0050AA] ring-1 ring-blue-500/20' 
                : 'border-gray-100 bg-white text-[#3A5070] hover:border-gray-300 hover:bg-gray-50'
            )"
          >
            <component :is="action.icon" class="h-4 w-4 shrink-0" :class="action.active ? 'text-[#0050AA]' : 'text-gray-500'" />
            <span class="leading-tight">{{ action.label }}</span>
          </button>
        </div>
      </div>

      <!-- Ввод сообщения -->
      <div class="border-t border-gray-100 p-4 bg-white">
        <div class="relative flex items-center gap-2">
          <div class="relative flex-1">
            <input
              v-model="message"
              placeholder="Введите сообщение или выберите тему..."
              class="w-full rounded-full bg-[#F4F7FB] py-3 pl-5 pr-4 text-sm text-[#0A1628] placeholder:text-[#7A96B4] focus:outline-none focus:ring-2 focus:ring-[#0050AA]/20"
              @keyup.enter="message = ''"
            />
          </div>
          <button
            @click="message = ''"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-all hover:bg-[#0050AA] hover:text-white"
          >
            <Send class="h-5 w-5 rotate-[-30deg] translate-x-0.5" />
          </button>
        </div>
        <div class="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#7A96B4]">
          <Sparkles class="h-3 w-3 text-[#E65028]" />
          Работает на базе ИИ
        </div>
      </div>
    </div>

    <!-- Приветственное облако (Welcome Message) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="showWelcome && !isOpen" 
        class="absolute bottom-16 right-0 mb-2 w-64 rounded-2xl bg-white p-4 shadow-xl border border-gray-100 pointer-events-auto cursor-pointer"
        @click="isOpen = true; showWelcome = false"
      >
        <div class="relative">
          <button 
            @click.stop="showWelcome = false" 
            class="absolute -top-2 -right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X class="h-3 w-3" />
          </button>
          <div class="flex gap-3">
            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0050AA] text-white overflow-hidden">
              <UserRound class="h-5 w-5 translate-y-0.5" />
            </div>
            <div class="text-xs text-[#0A1628] leading-relaxed">
              Здравствуйте! Я <strong>Лилия</strong>. Нужна помощь в поиске работы или получении субсидий?
            </div>
          </div>
          <div class="absolute -bottom-5 right-6 h-3 w-3 rotate-45 bg-white border-r border-b border-gray-100" />
        </div>
      </div>
    </Transition>

    <!-- Кнопка вызова -->
    <button
      @click="toggleWidget"
      class="group flex h-14 w-14 items-center justify-center rounded-full bg-[#0050AA] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#003D82] active:scale-95 relative overflow-hidden"
      :aria-label="isOpen ? 'Закрыть ассистента' : 'Открыть ассистента'"
    >
      <X v-if="isOpen" class="h-6 w-6" />
      <div v-else class="flex flex-col items-center">
        <UserRound class="h-7 w-7 translate-y-0.5" />
        <div class="absolute bottom-0 w-full h-1/3 bg-white/10 blur-sm" />
      </div>
      
      <!-- Тултип -->
      <div v-if="!isOpen" class="absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0A1628] px-3 py-1.5 text-xs font-medium text-white shadow-lg group-hover:block">
        Есть вопросы? Я помогу!
        <div class="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[#0A1628]" />
      </div>
    </button>
  </div>
</template>
