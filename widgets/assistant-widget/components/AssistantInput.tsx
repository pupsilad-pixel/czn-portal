"use client";

import { Send, Paperclip, Mic } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/shared/lib/utils";

interface AssistantInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export const AssistantInput = ({ onSend, disabled }: AssistantInputProps) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value);
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [value]);

  return (
    <div className="p-4 bg-white border-t border-blue-50 rounded-b-2xl">
      <div className="relative flex items-end gap-2 bg-blue-50/50 rounded-2xl p-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all border border-transparent focus-within:border-blue-200">
        <button 
          className="p-2 text-gray-400 hover:text-brand transition-colors disabled:opacity-50"
          type="button"
          disabled={disabled}
        >
          <Paperclip size={20} />
        </button>
        
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Напишите сообщение..."
          className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 resize-none max-h-[120px] text-gray-800 placeholder:text-gray-400"
          disabled={disabled}
        />

        <div className="flex items-center gap-1">
          <button 
            className="p-2 text-gray-400 hover:text-brand transition-colors disabled:opacity-50"
            type="button"
            disabled={disabled}
          >
            <Mic size={20} />
          </button>
          <button
            onClick={handleSend}
            disabled={!value.trim() || disabled}
            className={cn(
              "p-2 rounded-xl transition-all",
              value.trim() && !disabled
                ? "bg-brand text-white shadow-md hover:bg-brand-dark"
                : "bg-gray-100 text-gray-400"
            )}
            type="button"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
