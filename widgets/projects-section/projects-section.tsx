"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/entities/project-card/project-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { Button } from "@/shared/ui/button";
import { mockProjects } from "@/shared/constants/mock-projects";

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            title="Наши проекты"
            description="Государственные программы содействия занятости и профессионального развития"
          />
          <Button asChild variant="outline">
            <Link href="/projects">
              Все проекты
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {mockProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
