"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  GraduationCap,
  Search,
} from "lucide-react";

const QUICK_ACTIONS = [
  { id: "employment-registration", label: "Учёт в центре занятости", icon: ClipboardList },
  { id: "new-profession", label: "Получение новой профессии", icon: GraduationCap },
  { id: "own-business", label: "Открытие своего дела", icon: BriefcaseBusiness },
  { id: "subsidies", label: "Субсидии", icon: CircleDollarSign },
  { id: "job-placement", label: "Устройство на работу", icon: Search },
  { id: "payments", label: "Выплаты", icon: CreditCard },
  { id: "employer-support", label: "Поддержка работодателей", icon: Building2 },
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
          className="flex items-center gap-2 min-h-[48px] px-3 py-2 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all text-left group shadow-sm"
        >
          <action.icon size={18} strokeWidth={2} className="shrink-0 text-gray-700 group-hover:text-brand transition-colors" />
          <span className="text-xs font-medium text-gray-700 leading-tight">{action.label}</span>
        </motion.button>
      ))}
    </div>
  );
};
