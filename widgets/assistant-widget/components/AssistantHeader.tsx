"use client";

import { X, Minus, Bot } from "lucide-react";
import { motion } from "framer-motion";

interface AssistantHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
}

export const AssistantHeader = ({ onClose, onMinimize }: AssistantHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-blue-50 bg-white/80 backdrop-blur-md rounded-t-2xl">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand">
            <Bot size={24} />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 leading-tight">Лилия</h3>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-green-600 font-medium">Онлайн</span>
            <span className="text-gray-300">•</span>
            <span className="text-[10px] text-gray-500">Готов помочь</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-1">
        <button
          onClick={onMinimize}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          title="Свернуть"
        >
          <Minus size={20} />
        </button>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Закрыть"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
