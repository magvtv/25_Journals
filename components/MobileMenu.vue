<template>
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div v-if="isOpen" class="fixed inset-0 z-50 md:hidden">
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="close"
        ></div>
        
        <!-- Menu Panel -->
        <div class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
          <div class="flex flex-col h-full">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">BJ</span>
                </div>
                <span class="font-serif font-semibold text-lg">Menu</span>
              </div>
              <button 
                @click="close"
                class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Navigation Links -->
            <nav class="flex-1 p-6">
              <div class="space-y-4">
                <NuxtLink 
                  to="#journals" 
                  @click="close"
                  class="block py-3 px-4 text-lg font-medium text-journal-charcoal hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Our Journals
                </NuxtLink>
                <NuxtLink 
                  to="#about" 
                  @click="close"
                  class="block py-3 px-4 text-lg font-medium text-journal-charcoal hover:bg-gray-50 rounded-lg transition-colors"
                >
                  About Us
                </NuxtLink>
                <NuxtLink 
                  to="#testimonials" 
                  @click="close"
                  class="block py-3 px-4 text-lg font-medium text-journal-charcoal hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Customer Reviews
                </NuxtLink>
                <NuxtLink 
                  to="#inklink" 
                  @click="close"
                  class="block py-3 px-4 text-lg font-medium text-journal-charcoal hover:bg-gray-50 rounded-lg transition-colors"
                >
                  InkLink Companion
                </NuxtLink>
              </div>
            </nav>

            <!-- CTA Button -->
            <div class="p-6 border-t">
              <button class="w-full btn-primary text-center">
                Get Your Journal
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const mobileMenuStore = useMobileMenuStore()
const { isOpen } = storeToRefs(mobileMenuStore)

const close = () => {
  mobileMenuStore.close()
}

// Close menu on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .fixed.top-0.right-0,
.mobile-menu-leave-to .fixed.top-0.right-0 {
  transform: translateX(100%);
}
</style>