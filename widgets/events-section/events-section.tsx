"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EventCard } from "@/entities/event-card/event-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { Button } from "@/shared/ui/button";
import { mockEvents } from "@/shared/constants/mock-events";

export function EventsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F7FB]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            title="Ближайшие события"
            description="Ярмарки вакансий, семинары, мастер-классы и другие мероприятия"
          />
          <Button asChild variant="outline">
            <Link href="/events">
              Все события
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {mockEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
