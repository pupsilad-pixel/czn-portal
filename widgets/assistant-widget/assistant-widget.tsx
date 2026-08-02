"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { AssistantButton } from "./components/AssistantButton";
import { AssistantWindow } from "./components/AssistantWindow";

const TOOLTIP_STORAGE_KEY = "assistant_tooltip_shown_v2";
const TOOLTIP_DELAY_MS = 2000;
const TOOLTIP_AUTO_HIDE_MS = 8000;

// Кросс-платформенный тип для timer ID (Node возвращает Timeout, браузер — number)
type TimerId = ReturnType<typeof setTimeout>;

export const AssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Refs для таймеров — позволяют нам очищать их из разных эффектов/обработчиков
  // и не триггерить лишние ре-рендеры
  const showTimerRef = useRef<TimerId | null>(null);
  const autoHideTimerRef = useRef<TimerId | null>(null);
  // Ref для отслеживания состояния «чат уже был открыт» во время таймера
  const openedDuringTimerRef = useRef<boolean>(false);

  const safeSessionGet = (): boolean => {
    if (typeof window === "undefined") return false;
    try {
      return window.sessionStorage.getItem(TOOLTIP_STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  };

  const safeSessionSet = () => {
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(TOOLTIP_STORAGE_KEY, "true");
    } catch {
      /* sessionStorage недоступен в private mode — игнорируем */
    }
  };

  const clearTimers = () => {
    if (showTimerRef.current !== null) {
      clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }
    if (autoHideTimerRef.current !== null) {
      clearTimeout(autoHideTimerRef.current);
      autoHideTimerRef.current = null;
    }
  };

  useEffect(() => {
    setIsMounted(true);

    // Если пользователь уже видел подсказку в этой сессии — не показываем
    if (safeSessionGet()) {
      return;
    }

    // Запускаем таймер появления подсказки через 2 сек после монтирования
    showTimerRef.current = setTimeout(() => {
      // Если за это время пользователь уже открыл чат — не показываем подсказку
      if (openedDuringTimerRef.current) {
        safeSessionSet();
        return;
      }
      setShowTooltip(true);

      // Через 8 сек после показа — автоматически прячем, чтобы не мозолил глаза
      autoHideTimerRef.current = setTimeout(() => {
        setShowTooltip(false);
        safeSessionSet();
      }, TOOLTIP_AUTO_HIDE_MS);
    }, TOOLTIP_DELAY_MS);

    return () => {
      clearTimers();
    };
  }, []);

  // Когда чат открывается — запоминаем этот факт, чтобы таймер подсказки
  // не показал её поверх открытого окна.
  useEffect(() => {
    if (isOpen) {
      openedDuringTimerRef.current = true;
      if (showTooltip) {
        setShowTooltip(false);
        safeSessionSet();
        clearTimers();
      }
    }
  }, [isOpen, showTooltip]);

  if (!isMounted) return null;

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    openedDuringTimerRef.current = true;

    // Если подсказка видна — закрываем её и отмечаем как просмотренную.
    // Если не видна (например, кликнули до 2 сек) — всё равно отмечаем,
    // чтобы она не появилась поверх открытого чата.
    if (showTooltip) {
      setShowTooltip(false);
    }
    safeSessionSet();
    clearTimers();
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
    safeSessionSet();
    clearTimers();
  };

  return (
    // Контейнер: фиксированный в правом нижнем углу, высокий z-index.
    // Окно чата позиционируется абсолютно над кнопкой (bottom-full + mb-3),
    // так что кнопка всегда доступна для закрытия чата даже на мобильных.
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <AssistantWindow
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onMinimize={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        <AssistantButton
          isOpen={isOpen}
          onClick={handleToggle}
          showTooltip={showTooltip}
          onCloseTooltip={handleCloseTooltip}
        />
      </div>
    </div>
  );
};
