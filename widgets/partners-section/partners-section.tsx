"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/shared/ui/section-header";

const partners = [
  { id: "1", name: "Министерство труда РТ", abbr: "МТиСЗ" },
  { id: "2", name: "Правительство РТ", abbr: "Правительство" },
  { id: "3", name: "ПАО «КАМАЗ»", abbr: "КАМАЗ" },
  { id: "4", name: "ПАО «Татнефть»", abbr: "Татнефть" },
  { id: "5", name: "АО «Иннополис»", abbr: "Иннополис" },
  { id: "6", name: "Казанский федеральный университет", abbr: "КФУ" },
  { id: "7", name: "Ростелеком", abbr: "Ростелеком" },
  { id: "8", name: "Сбербанк", abbr: "Сбер" },
  { id: "9", name: "ПАО «Казаньоргсинтез»", abbr: "КОС" },
  { id: "10", name: "Федерация профсоюзов РТ", abbr: "Профсоюзы" },
];

export function PartnersSection() {
  return (
    <section className="py-14 md:py-20 bg-[#F4F7FB]">
      <div className="container">
        <SectionHeader
          title="Партнёры"
          description="Крупнейшие работодатели и государственные организации Республики Татарстан"
          centered
          className="mb-10"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#5AB4E6]/40 hover:-translate-y-0.5"
            >
              {/* Аватар-заглушка */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EBF3FF] to-[#E8EFF8] text-[#0050AA] font-bold text-sm">
                {partner.abbr.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-xs text-[#3A5070] leading-tight group-hover:text-[#0050AA] transition-colors line-clamp-2">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
