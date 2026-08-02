"use client";

import { useState } from "react";
import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { NewsCard } from "@/entities/news-card/news-card";
import { mockNews } from "@/shared/constants/mock-news";
import { cn } from "@/shared/lib/utils";

const categories = ["Все", "События", "Обучение", "Статистика", "Поддержка", "Цифровизация"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered =
    activeCategory === "Все"
      ? mockNews
      : mockNews.filter((n) => n.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container">
            <Breadcrumbs items={[{ title: "Новости" }]} className="mb-6" />
            <SectionHeader
              title="Новости и события"
              description="Актуальная информация о рынке труда, программах поддержки и мероприятиях"
            />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            {/* Фильтр */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((news, index) => (
                <NewsCard key={news.id} news={news} index={index} />
              ))}
            </div>

            {/* Пагинация */}
            <div className="flex justify-center gap-2 mt-12">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={
                    page === 1
                      ? "flex h-10 w-10 items-center justify-center rounded-xl bg-[#0050AA] text-white font-medium"
                      : "flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200 text-[#3A5070] hover:border-[#0050AA] hover:text-[#0050AA] transition-colors"
                  }
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
