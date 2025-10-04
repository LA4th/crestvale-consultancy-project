import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollTrigger() {
  const isVisible = ref(false)
  const element = ref(null)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  onMounted(() => {
    if (element.value) observer.observe(element.value)
  })

  onUnmounted(() => observer.disconnect())

  return { isVisible, element }
}
