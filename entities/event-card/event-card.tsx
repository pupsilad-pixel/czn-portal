"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/shared/ui/badge";
import type { EventItem } from "@/shared/types";

interface EventCardProps {
  event: EventItem;
  index?: number;
}

const typeColors: Record<string, "default" | "secondary" | "accent" | "blue"> = {
  "Ярмарка вакансий": "blue",
  "Открытые двери": "default",
  "Мастер-класс": "accent",
  "Семинар": "secondary",
};

export function EventCard({ event, index = 0 }: EventCardProps) {
  const badgeVariant = typeColors[event.type] || "secondary";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/events/${event.id}`}
        className="group flex flex-col md:flex-row gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent"
      >
        {/* Изображение */}
        <div className="relative h-40 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-xl">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Контент */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="mb-2">
            <Badge variant={badgeVariant}>{event.type}</Badge>
          </div>

          <h3 className="text-base font-semibold text-[#0A1628] leading-snug group-hover:text-[#0050AA] transition-colors mb-2">
            {event.title}
          </h3>

          <p className="text-sm text-[#3A5070] leading-relaxed line-clamp-2 mb-4">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#7A96B4] mt-auto">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#5AB4E6]" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#5AB4E6]" />
              {event.location}
            </span>
          </div>

          <div className="flex items-center text-xs font-medium text-[#7A96B4] group-hover:text-[#0050AA] transition-colors mt-3">
            Подробнее о событии
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
