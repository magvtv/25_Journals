<template>
    <section id="journals" class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-journal-charcoal mb-4">
            Best Selling Journals
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular journals, loved by thousands of writers, planners, and creators.
          </p>
        </div>
  
        <!-- Carousel -->
        <div class="relative">
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
            >
              <div 
                v-for="journal in bestSellers" 
                :key="journal.id"
                class="flex-shrink-0 px-3"
                :class="slideClasses"
              >
                <JournalCard :journal="journal" />
              </div>
            </div>
          </div>
  
          <!-- Navigation Buttons -->
          <button 
            @click="prevSlide"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-10"
            :disabled="currentSlide === 0"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
  
          <button 
            @click="nextSlide"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-10"
            :disabled="currentSlide >= maxSlide"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
  
        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(_, index) in Array(maxSlide + 1)"
            :key="index"
            @click="currentSlide = index"
            class="w-3 h-3 rounded-full transition-colors"
            :class="currentSlide === index ? 'bg-primary-600' : 'bg-gray-300'"
          ></button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const currentSlide = ref(0)
  const screenSize = ref('lg')
  
  const bestSellers = [
    {
      id: 1,
      title: "The Wealth Builder",
      subtitle: "For Gen Z Financiers",
      price: 700,
      image: "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Track investments, set financial goals, and build wealth systematically.",
      features: ["Investment tracking", "Goal setting", "Monthly reviews", "Habit tracker"],
      bestseller: true
    },
    {
      id: 2,
      title: "The Creator's Canvas",
      subtitle: "For Content Creators",
      price: 700,
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Capture ideas, plan content, and track your creative journey.",
      features: ["Idea capture", "Content calendar", "Analytics tracking", "Inspiration pages"],
      bestseller: true
    },
    {
      id: 3,
      title: "The Wisdom Keeper",
      subtitle: "For Book Lovers",
      price: 700,
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Document insights, quotes, and learnings from your reading journey.",
      features: ["Book summaries", "Quote collection", "Reading goals", "Reflection prompts"],
      bestseller: true
    },
    {
      id: 4,
      title: "The Mind Garden",
      subtitle: "For Mental Wellness",
      price: 700,
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Nurture your mental health with guided reflection and mindfulness.",
      features: ["Mood tracking", "Gratitude practice", "Mindfulness exercises", "Self-care planning"],
      bestseller: true
    }
  ]
  
  const slidesPerView = computed(() => {
    switch (screenSize.value) {
      case 'sm': return 1
      case 'md': return 2
      case 'lg': return 3
      default: return 3
    }
  })
  
  const slideWidth = computed(() => 100 / slidesPerView.value)
  const maxSlide = computed(() => Math.max(0, bestSellers.length - slidesPerView.value))
  
  const slideClasses = computed(() => {
    switch (screenSize.value) {
      case 'sm': return 'w-full'
      case 'md': return 'w-1/2'
      case 'lg': return 'w-1/3'
      default: return 'w-1/3'
    }
  })
  
  const updateScreenSize = () => {
    const width = window.innerWidth
    if (width < 768) {
      screenSize.value = 'sm'
    } else if (width < 1024) {
      screenSize.value = 'md'
    } else {
      screenSize.value = 'lg'
    }
  }
  
  const nextSlide = () => {
    if (currentSlide.value < maxSlide.value) {
      currentSlide.value++
    }
  }
  
  const prevSlide = () => {
    if (currentSlide.value > 0) {
      currentSlide.value--
    }
  }
  
  onMounted(() => {
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize)
  })
  </script>