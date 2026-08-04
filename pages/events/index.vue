<script setup lang="ts">
import { mockEvents } from "@/shared/constants/mock-events";
</script>

<template>
  <div class="py-12">
    <div class="container">
      <SectionHeader
        title="Мероприятия"
        description="График ближайших ярмарок вакансий и обучающих семинаров"
        class="mb-10"
      />
      <div class="grid grid-cols-1 gap-6">
        <EventCard v-for="(event, index) in mockEvents" :key="event.id" :event="event" :index="index" />
      </div>
    </div>
  </div>
</template>
