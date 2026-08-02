"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  FileText, 
  Calendar, 
  HeartHandshake, 
  HelpCircle, 
  Phone, 
  Newspaper 
} from "lucide-react";

const QUICK_ACTIONS = [
  { id: "find-job", label: "Найти работу", icon: Briefcase },
  { id: "find-staff", label: "Найти сотрудника", icon: Users },
  { id: "get-service", label: "Получить услугу", icon: FileText },
  { id: "appointment", label: "Записаться на прием", icon: Calendar },
  { id: "support", label: "Меры поддержки", icon: HeartHandshake },
  { id: "faq", label: "Частые вопросы", icon: HelpCircle },
  { id: "contacts", label: "Контакты", icon: Phone },
  { id: "news", label: "Новости", icon: Newspaper },
];

interface AssistantQuickActionsProps {
  onActionClick: (label: string) => void;
}

export const AssistantQuickActions = ({ onActionClick }: AssistantQuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {QUICK_ACTIONS.map((action, index) => (
        <motion.button
          key={action.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.02, backgroundColor: "var(--color-surface-2)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onActionClick(action.label)}
          className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-blue-50 hover:border-blue-100 transition-all text-center group shadow-sm"
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand mb-2 group-hover:bg-brand group-hover:text-white transition-colors">
            <action.icon size={16} />
          </div>
          <span className="text-[11px] font-medium text-gray-700 leading-tight">
            {action.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};
