"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";

interface AssistantMessageProps {
  content: string;
  role: "assistant" | "user";
  timestamp: string;
}

export const AssistantMessage = ({ content, role, timestamp }: AssistantMessageProps) => {
  const isAssistant = role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={cn(
        "flex flex-col mb-4",
        isAssistant ? "items-start" : "items-end"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm",
          isAssistant
            ? "bg-white text-gray-800 rounded-tl-none border border-blue-50"
            : "bg-brand text-white rounded-tr-none"
        )}
      >
        {content}
      </div>
      <span className="text-[10px] text-gray-400 mt-1 px-1">{timestamp}</span>
    </motion.div>
  );
};
