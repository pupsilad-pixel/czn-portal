"use client";

import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/lib/utils";
import type { ProjectItem } from "@/shared/types";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

const statusMap = {
  active: { label: "Активный", variant: "default" as const },
  completed: { label: "Завершён", variant: "secondary" as const },
  planned: { label: "Планируется", variant: "accent" as const },
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const status = statusMap[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-transparent"
      >
        {/* Изображение */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <Badge variant={status.variant}>{status.label}</Badge>
          </div>
        </div>

        {/* Контент */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-sm font-semibold text-[#0A1628] leading-snug group-hover:text-[#0050AA] transition-colors mb-2 flex-1">
            {project.title}
          </h3>

          <p className="text-xs text-[#3A5070] leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {project.participants && (
            <div className="flex items-center gap-1.5 text-xs text-[#7A96B4] mb-4">
              <Users className="h-3.5 w-3.5 text-[#5AB4E6]" />
              <span>{project.participants.toLocaleString("ru-RU")} участников</span>
            </div>
          )}

          <div className="flex items-center text-xs font-medium text-[#7A96B4] group-hover:text-[#0050AA] transition-colors mt-auto">
            Подробнее
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
