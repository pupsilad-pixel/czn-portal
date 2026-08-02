"use client";

import { motion } from "framer-motion";
import { AssistantHeader } from "./AssistantHeader";
import { AssistantMessage } from "./AssistantMessage";
import { AssistantQuickActions } from "./AssistantQuickActions";
import { AssistantInput } from "./AssistantInput";
import { AssistantTyping } from "./AssistantTyping";
import { AssistantPlaceholder } from "./AssistantPlaceholder";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
}

interface AssistantWindowProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Здравствуйте!",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  {
    id: "2",
    role: "assistant",
    content: "Я виртуальный помощник Центра занятости населения по Республике Татарстан.",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  {
    id: "3",
    role: "assistant",
    content: "Помогу найти нужную услугу, вакансию или ответ на вопрос.",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

export const AssistantWindow = ({ isOpen, onClose, onMinimize }: AssistantWindowProps) => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Спасибо! Интеллектуальная обработка сообщений будет доступна на следующем этапе проекта.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1500);
  };

  const handleQuickAction = (label: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: label,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Функциональность будет реализована на следующем этапе разработки.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <motion.div
      id="assistant-window"
      role="dialog"
      aria-modal="false"
      aria-label="Окно чата с виртуальным помощником"
      initial={{ opacity: 0, scale: 0.95, y: 20, transformOrigin: "bottom right" }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ type: "spring", damping: 22, stiffness: 320 }}
      // FIX мобильной версии:
      //  - раньше: bottom-20 right-0 без -right на мобильном — окно чата перекрывало кнопку,
      //    из-за чего нельзя было закрыть чат тапом по кнопке, и при повторном тапе
      //    на ту же точку срабатывал «прыжок» состояния.
      //  - теперь окно позиционируется над кнопкой через bottom-full mb-3 с одинаковым
      //    right-0 на всех брейкпоинтах, что на десктопе даёт красивое выравнивание,
      //    а на мобильном — корректно работает через calc(100vw - 2rem).
      className="absolute bottom-full right-0 mb-3 sm:mb-4 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[calc(100vw-2rem)] h-[70vh] sm:h-[680px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-blue-50"
    >
      <AssistantHeader onClose={onClose} onMinimize={onMinimize} />

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#F8FAFD] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"
      >
        {messages.map((msg) => (
          <AssistantMessage
            key={msg.id}
            role={msg.role}
            content={msg.content}
            timestamp={msg.timestamp}
          />
        ))}

        {messages.length === INITIAL_MESSAGES.length && (
          <AssistantQuickActions onActionClick={handleQuickAction} />
        )}

        {isTyping && <AssistantTyping />}
      </div>

      <AssistantInput onSend={handleSend} disabled={isTyping} />
    </motion.div>
  );
};
