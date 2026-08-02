"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface AssistantButtonProps {
  isOpen: boolean;
  onClick: () => void;
  showTooltip?: boolean;
  onCloseTooltip?: () => void;
}

export const AssistantButton = ({
  isOpen,
  onClick,
  showTooltip,
  onCloseTooltip,
}: AssistantButtonProps) => {
  return (
    <div className="relative">
      {/* Подсказка рендерится ВНУТРИ relative-контейнера, но tooltip
          использует absolute + bottom-full и поэтому выходит за пределы кнопки.
          z-50 поднят достаточно, чтобы перебивать фон. */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            key="assistant-tooltip"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", damping: 22, stiffness: 320 }}
            // FIX #1: на мобильных тултип сдвигаем left:0 вместо right:0,
            // чтобы он не вылезал за правую границу viewport.
            // Также z-[60] чтобы быть над пульсом, но под z-[9999] контейнера ассистента.
            className="absolute bottom-full mb-3 right-0 left-auto sm:right-0 w-[calc(100vw-4rem)] sm:w-64 max-w-[280px] bg-white rounded-2xl shadow-xl border border-blue-100 z-[60] p-4 pointer-events-auto"
            role="tooltip"
            aria-live="polite"
          >
            {/* Кнопка закрытия подсказки — отдельная, не наследует клики от родителя */}
            <button
              type="button"
              aria-label="Закрыть подсказку"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onCloseTooltip?.();
              }}
              // FIX #2: увеличена область тапа для мобильных (32x32 вместо 16x16)
              className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={16} />
            </button>
            <p className="text-sm text-gray-700 leading-relaxed pr-8">
              Здравствуйте! Я помогу разобраться с сервисами Центра занятости.
            </p>
            {/* Стрелочка-указатель к кнопке */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-blue-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Основная кнопка ассистента.
          FIX #3: убран onPointerDown e.stopPropagation() — он мешал взаимодействию
          с подсказкой и не нужен (клик срабатывает корректно и без него).
          touch-manipulation убирает 300ms задержку на старых мобильных. */}
      <motion.button
        type="button"
        role="button"
        aria-label={isOpen ? "Закрыть чат ассистента" : "Открыть чат ассистента"}
        aria-expanded={isOpen}
        aria-controls="assistant-window"
        aria-describedby={showTooltip && !isOpen ? "assistant-tooltip-text" : undefined}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        onClick={onClick}
        className={cn(
          "relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 overflow-visible touch-manipulation select-none",
          "focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/50",
          isOpen
            ? "bg-white text-brand border border-blue-200 shadow-xl"
            : "bg-brand text-white hover:bg-brand-dark border-2 border-brand-dark/20 shadow-[0_8px_30px_rgb(0,80,170,0.4)]"
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-white/10 blur-sm rounded-full" />
              <Bot size={32} strokeWidth={2.5} className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] sm:size-[34px]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Пульсирующая анимация и индикатор онлайн — только когда чат закрыт и подсказка НЕ показывается */}
        {!isOpen && !showTooltip && (
          <>
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-brand pointer-events-none"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute top-0 right-0 w-4 h-4 bg-accent rounded-full border-2 border-white z-10 pointer-events-none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            />
          </>
        )}
      </motion.button>

      {/* Скрытый текст для скринридеров, когда подсказка видима */}
      {showTooltip && !isOpen && (
        <span id="assistant-tooltip-text" className="sr-only">
          Открыть чат с виртуальным помощником Центра занятости
        </span>
      )}
    </div>
  );
};
