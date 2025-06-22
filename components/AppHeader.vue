<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="headerClasses">
    <div class="container-custom">
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">BJ</span>
          </div>
          <span class="font-serif font-semibold text-xl text-journal-charcoal">Book Journal Studio</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="#journals" class="text-journal-charcoal hover:text-primary-600 font-medium transition-colors">
            Journals
          </NuxtLink>
          <NuxtLink to="#about" class="text-journal-charcoal hover:text-primary-600 font-medium transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="#testimonials" class="text-journal-charcoal hover:text-primary-600 font-medium transition-colors">
            Reviews
          </NuxtLink>
          <button class="btn-primary">
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const { $router } = useNuxtApp()

const headerClasses = computed(() => ({
  'glass-effect shadow-lg': scrollY.value > 50,
  'bg-transparent': scrollY.value <= 50
}))

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const toggleMobileMenu = () => {
  // This will be handled by the mobile menu store
  const mobileMenuStore = useMobileMenuStore()
  mobileMenuStore.toggle()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>