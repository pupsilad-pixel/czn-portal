"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import type { BannerItem } from "@/shared/types";

const mockBanners: BannerItem[] = [
  {
    id: "1",
    title: "Ярмарка вакансий «Работа в Татарстане — 2025»",
    description:
      "15 сентября 2025 г. • Казань Экспо • Более 200 работодателей и 3 500 вакансий",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1400&q=80",
    href: "/events/1",
    buttonText: "Узнать подробнее",
  },
  {
    id: "2",
    title: "Бесплатное обучение по ИТ-специальностям",
    description:
      "Запишитесь на бесплатные курсы переподготовки. Разработка, аналитика данных, дизайн",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1400&q=80",
    href: "/training",
    buttonText: "Записаться на курс",
  },
  {
    id: "3",
    title: "Самозанятость — субсидия до 350 000 ₽",
    description:
      "Получите государственную поддержку для открытия собственного дела в Республике Татарстан",
    image:
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1400&q=80",
    href: "/self-employment",
    buttonText: "Получить поддержку",
  },
  {
    id: "4",
    title: "Молодёжная занятость — программа «Старт»",
    description:
      "Стажировки, временная занятость и поддержка для молодых специалистов до 25 лет",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1400&q=80",
    href: "/youth",
    buttonText: "Подробнее о программе",
  },
];

export function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {mockBanners.map((banner, index) => (
            <div key={banner.id} className="relative min-w-full">
              {/* Изображение */}
              <div className="relative h-72 md:h-96 lg:h-[480px] overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              </div>

              {/* Контент */}
              <div className="absolute inset-0 flex items-center">
                <div className="container">
                  <AnimatePresence mode="wait">
                    {current === index && (
                      <motion.div
                        key={banner.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-xl"
                      >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                          {banner.title}
                        </h2>
                        <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">
                          {banner.description}
                        </p>
                        <Button asChild variant="white" size="lg">
                          <Link href={banner.href}>
                            {banner.buttonText}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Навигационные кнопки */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all md:left-6"
        aria-label="Предыдущий баннер"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all md:right-6"
        aria-label="Следующий баннер"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {mockBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "rounded-full transition-all duration-300",
              current === index
                ? "bg-white w-6 h-2"
                : "bg-white/50 hover:bg-white/70 w-2 h-2"
            )}
            aria-label={`Перейти к баннеру ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
