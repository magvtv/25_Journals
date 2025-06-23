<template>
    <div class="journal-card group cursor-pointer" @click="openModal">
      <!-- Image -->
      <div class="relative overflow-hidden">
        <img 
          :src="journal.image" 
          :alt="journal.title"
          class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        >
        
        <!-- Bestseller Badge -->
        <div v-if="journal.bestseller" class="absolute top-4 left-4 bg-journal-gold text-white px-3 py-1 rounded-full text-sm font-medium">
          Bestseller
        </div>
        
        <!-- Price Badge -->
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span class="font-bold text-journal-charcoal">KES {{ journal.price }}</span>
        </div>
      </div>
  
      <!-- Content -->
      <div class="p-6">
        <div class="mb-2">
          <h3 class="font-serif font-bold text-xl text-journal-charcoal group-hover:text-primary-600 transition-colors">
            {{ journal.title }}
          </h3>
          <p class="text-primary-600 font-medium">{{ journal.subtitle }}</p>
        </div>
        
        <p class="text-gray-600 mb-4 line-clamp-2">
          {{ journal.description }}
        </p>
  
        <!-- Features -->
        <div class="mb-4">
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="feature in journal.features.slice(0, 2)" 
              :key="feature"
              class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {{ feature }}
            </span>
            <span v-if="journal.features.length > 2" class="text-xs text-gray-500">
              +{{ journal.features.length - 2 }} more
            </span>
          </div>
        </div>
  
        <!-- CTA Button -->
        <button class="w-full btn-primary group-hover:shadow-lg">
          Reserve for KES {{ journal.price }}
        </button>
      </div>
    </div>
  
    <!-- Modal -->
    <JournalModal 
      v-if="showModal" 
      :journal="journal" 
      @close="closeModal" 
    />
  </template>
  
  <script setup lang="ts">
  interface Journal {
    id: number
    title: string
    subtitle: string
    price: number
    image: string
    description: string
    features: string[]
    bestseller?: boolean
  }
  
  interface Props {
    journal: Journal
  }
  
  defineProps<Props>()
  
  const showModal = ref(false)
  
  const openModal = () => {
    showModal.value = true
  }
  
  const closeModal = () => {
    showModal.value = false
  }
  </script>
  
  <style scoped>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>