"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { NewsCard } from "@/entities/news-card/news-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { mockNews } from "@/shared/constants/mock-news";

const categories = ["Все", "События", "Обучение", "Статистика", "Поддержка", "Цифровизация"];

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered =
    activeCategory === "Все"
      ? mockNews.slice(0, 6)
      : mockNews.filter((n) => n.category === activeCategory).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <SectionHeader
            title="Новости и события"
            description="Актуальная информация о рынке труда, новых программах и мероприятиях"
          />
          <Button asChild variant="outline">
            <Link href="/news">
              Все новости
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Фильтр по категориям */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-[#0050AA] text-white shadow-sm"
                  : "bg-[#F4F7FB] text-[#3A5070] hover:bg-[#EBF3FF] hover:text-[#0050AA]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Сетка новостей */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((news, index) => (
            <NewsCard key={news.id} news={news} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
