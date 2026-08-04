<script setup lang="ts">
import Hero from '@/widgets/hero/Hero.vue'
import NewsSection from '@/widgets/news-section/NewsSection.vue'
import EventsSection from '@/widgets/events-section/EventsSection.vue'
import CitizensSection from '@/widgets/services/CitizensSection.vue'
import EmployersSection from '@/widgets/services/EmployersSection.vue'
import ProjectsSection from '@/widgets/projects-section/ProjectsSection.vue'
import AssistantWidget from '@/widgets/assistant-widget/AssistantWidget.vue'
</script>

<template>
  <main>
    <Hero />
    <NewsSection />
    <CitizensSection />
    <EventsSection />
    <EmployersSection />
    <ProjectsSection />
    <AssistantWidget />
  </main>
</template>
