"use client";

import { Bot } from "lucide-react";

interface AssistantPlaceholderProps {
  text: string;
}

export const AssistantPlaceholder = ({ text }: AssistantPlaceholderProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-blue-50/30 rounded-3xl border border-dashed border-blue-100 my-4">
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand shadow-sm mb-4">
        <Bot size={24} />
      </div>
      <p className="text-sm text-gray-500 font-medium max-w-[200px] leading-relaxed">
        {text}
      </p>
    </div>
  );
};
