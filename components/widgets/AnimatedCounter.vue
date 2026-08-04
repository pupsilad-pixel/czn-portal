<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { 
  Briefcase, 
  Users, 
  FileText, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-vue-next'
import { cn } from '@/shared/lib/utils'

interface AnimatedCounterProps {
  value: number
  decimals?: number
  suffix: string
}

const props = defineProps<AnimatedCounterProps>()

const currentValue = ref(0)
let animationFrame = 0

const animateCounter = () => {
  const duration = 1400
  const startTime = performance.now()

  const animate = (timestamp: number) => {
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const easedProgress = 1 - Math.pow(1 - progress, 3)
    currentValue.value = props.value * easedProgress

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate)
    }
  }

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  animateCounter()
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})

const formattedValue = computed(() => {
  return currentValue.value.toLocaleString("ru-RU", {
    minimumFractionDigits: props.decimals || 0,
    maximumFractionDigits: props.decimals || 0,
  })
})
</script>

<template>
  <span>{{ formattedValue }}{{ suffix }}</span>
</template>
