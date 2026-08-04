<script setup lang="ts">
import SectionHeader from "@/shared/ui/SectionHeader.vue";
import CitizensSection from "@/widgets/services/CitizensSection.vue";
import EmployersSection from "@/widgets/services/EmployersSection.vue";
</script>

<template>
  <div>
    <div class="container pt-12">
      <SectionHeader
        title="Государственные услуги"
        description="Полный перечень услуг Центра занятости населения для граждан и работодателей"
      />
    </div>
    <CitizensSection />
    <EmployersSection />
  </div>
</template>
