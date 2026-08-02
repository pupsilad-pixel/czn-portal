"use client";

import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import type { VacancyItem } from "@/shared/types";

interface VacancyCardProps {
  vacancy: VacancyItem;
  index?: number;
}

export function VacancyCard({ vacancy, index = 0 }: VacancyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="group rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent hover:-translate-y-0.5">
        {/* Заголовок и зарплата */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <Link
              href={`/jobs/${vacancy.id}`}
              className="text-base md:text-lg font-semibold text-[#0A1628] hover:text-[#0050AA] transition-colors line-clamp-2"
            >
              {vacancy.title}
            </Link>
            <div className="text-sm text-[#3A5070] mt-1">{vacancy.company}</div>
          </div>
          <div className="text-lg md:text-xl font-bold text-[#0050AA] shrink-0">
            {vacancy.salary}
          </div>
        </div>

        {/* Описание */}
        <p className="text-sm text-[#3A5070] leading-relaxed line-clamp-2 mb-4">
          {vacancy.description}
        </p>

        {/* Метаданные */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="default">{vacancy.employment}</Badge>
          <Badge variant="secondary">{vacancy.experience}</Badge>
        </div>

        {/* Нижняя информация */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#7A96B4]">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {vacancy.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {vacancy.publishedDate}
            </span>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href={`/jobs/${vacancy.id}`}>
              Подробнее
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
