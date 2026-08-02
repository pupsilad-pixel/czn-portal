"use client";

import Link from "next/link";
import { FileText, BookOpen, BarChart3, Scale, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/shared/ui/section-header";
import { motion } from "framer-motion";

const materials = [
  {
    id: "1",
    title: "Как написать эффективное резюме",
    category: "Карьера",
    icon: FileText,
    href: "/documents/resume-guide",
    color: "#0050AA",
  },
  {
    id: "2",
    title: "Права и обязанности безработного",
    category: "Юридические",
    icon: Scale,
    href: "/documents/rights",
    color: "#003D82",
  },
  {
    id: "3",
    title: "Обзор рынка труда РТ — II квартал 2025",
    category: "Аналитика",
    icon: BarChart3,
    href: "/documents/market-review-q2-2025",
    color: "#E65028",
  },
  {
    id: "4",
    title: "Путеводитель по государственным услугам",
    category: "Услуги",
    icon: BookOpen,
    href: "/documents/services-guide",
    color: "#5AB4E6",
  },
];

export function MaterialsSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            title="Полезные материалы"
            description="Руководства, аналитика и справочные документы"
          />
          <Link
            href="/documents"
            className="flex items-center gap-1.5 text-sm font-medium text-[#0050AA] hover:underline shrink-0"
          >
            Все документы
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {materials.map((material, index) => {
            const Icon = material.icon;
            return (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={material.href}
                  className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-transparent h-full"
                >
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${material.color}14`, color: material.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <div className="text-xs font-medium text-[#7A96B4] mb-1.5">
                      {material.category}
                    </div>
                    <h3 className="text-sm font-semibold text-[#0A1628] leading-snug group-hover:text-[#0050AA] transition-colors">
                      {material.title}
                    </h3>
                  </div>

                  <div className="flex items-center text-xs font-medium text-[#7A96B4] group-hover:text-[#0050AA] transition-colors">
                    Открыть
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
