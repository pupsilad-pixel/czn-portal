"use client";

import Link from "next/link";
import { Calendar, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/lib/utils";
import type { NewsItem } from "@/shared/types";

interface NewsCardProps {
  news: NewsItem;
  index?: number;
  featured?: boolean;
}

const categoryColors: Record<string, "default" | "secondary" | "accent" | "blue" | "red"> = {
  "События": "blue",
  "Обучение": "default",
  "Статистика": "secondary",
  "Поддержка": "accent",
  "Цифровизация": "blue",
};

export function NewsCard({ news, index = 0, featured = false }: NewsCardProps) {
  const badgeVariant = categoryColors[news.category] || "secondary";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="h-full"
    >
      <Link
        href={`/news/${news.id}`}
        className={cn(
          "group flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-transparent"
        )}
      >
        {/* Изображение */}
        <div className={cn("relative overflow-hidden", featured ? "h-56" : "h-44")}>
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-3 left-3">
            <Badge variant={badgeVariant}>{news.category}</Badge>
          </div>
        </div>

        {/* Контент */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-3 text-xs text-[#7A96B4] mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {news.date}
            </span>
            {news.views && (
              <span className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" />
                {news.views.toLocaleString("ru-RU")}
              </span>
            )}
          </div>

          <h3 className="text-sm font-semibold text-[#0A1628] leading-snug group-hover:text-[#0050AA] transition-colors line-clamp-2 flex-1 mb-3">
            {news.title}
          </h3>

          <p className="text-xs text-[#3A5070] leading-relaxed line-clamp-2 mb-4">
            {news.excerpt}
          </p>

          <div className="flex items-center text-xs font-medium text-[#7A96B4] group-hover:text-[#0050AA] transition-colors mt-auto">
            Читать далее
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
