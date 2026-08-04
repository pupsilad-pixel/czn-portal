<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { mockEvents } from "@/shared/constants/mock-events";
</script>

<template>
  <section class="py-16 md:py-24 bg-[#F4F7FB]">
    <div class="container">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeader
          title="Ближайшие события"
          description="Ярмарки вакансий, семинары, мастер-классы и другие мероприятия"
        />
        <Button as-child variant="outline">
          <NuxtLink to="/events">
            Все события
            <ArrowRight class="h-4 w-4" />
          </NuxtLink>
        </Button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
        <EventCard v-for="(event, index) in mockEvents" :key="event.id" :event="event" :index="index" />
      </div>
    </div>
  </section>
</template>
