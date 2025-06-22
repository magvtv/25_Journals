<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="$emit('close')"
        ></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <!-- Close Button -->
          <button 
            @click="$emit('close')"
            class="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Image Section -->
            <div class="relative">
              <img 
                :src="journal.image" 
                :alt="journal.title"
                class="w-full h-64 lg:h-full object-cover lg:rounded-l-2xl"
              >
              <div v-if="journal.bestseller" class="absolute top-4 left-4 bg-journal-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                Bestseller
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-8">
              <div class="mb-6">
                <h2 class="font-serif font-bold text-3xl text-journal-charcoal mb-2">
                  {{ journal.title }}
                </h2>
                <p class="text-primary-600 font-medium text-lg">{{ journal.subtitle }}</p>
              </div>

              <p class="text-gray-600 mb-6 text-lg leading-relaxed">
                {{ journal.description }}
              </p>

              <!-- Features -->
              <div class="mb-8">
                <h3 class="font-semibold text-lg mb-4">What's Included:</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div 
                    v-for="feature in journal.features" 
                    :key="feature"
                    class="flex items-center space-x-2"
                  >
                    <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-700">{{ feature }}</span>
                  </div>
                </div>
              </div>

              <!-- Preview Pages -->
              <div class="mb-8">
                <h3 class="font-semibold text-lg mb-4">Preview Pages:</h3>
                <div class="grid grid-cols-3 gap-2">
                  <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span class="text-gray-500 text-sm">Page 1</span>
                  </div>
                  <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span class="text-gray-500 text-sm">Page 2</span>
                  </div>
                  <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span class="text-gray-500 text-sm">Page 3</span>
                  </div>
                </div>
              </div>

              <!-- Pricing & CTA -->
              <div class="border-t pt-6">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <span class="text-3xl font-bold text-journal-charcoal">KES {{ journal.price }}</span>
                    <p class="text-sm text-gray-600">Delivered within 48 hours in Nairobi</p>
                  </div>
                </div>
                
                <button 
                  @click="handleReserve"
                  class="w-full btn-primary text-lg py-4 mb-4"
                >
                  Reserve Your Journal
                </button>
                
                <div class="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Premium Quality</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Fast Delivery</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span>Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
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
defineEmits<{
  close: []
}>()

const handleReserve = () => {
  // This will open the pre-order form
  console.log('Opening pre-order form...')
  // TODO: Implement pre-order form logic
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>