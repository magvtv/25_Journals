<template>
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-cross-pattern"></div>
      </div>
  
      <div class="container-custom section-padding relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="text-center lg:text-left animate-slide-up">
            <h1 class="text-4xl md:text-6xl font-serif font-bold text-journal-charcoal mb-6 leading-tight">
              Not just a book.<br>
              <span class="text-gradient">It's an extension</span><br>
              of your mind.
            </h1>
            
            <p class="text-xl text-gray-600 mb-8 max-w-2xl">
              Discover journals crafted for thinkers, planners, and creators. From Gen Z wealth builders to content creators—find your perfect companion for capturing ideas, goals, and growth.
            </p>
  
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="btn-primary text-lg px-8 py-4">
                Explore Journals
              </button>
              <button class="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
  
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div class="text-center">
                <div class="text-2xl font-bold text-journal-charcoal">500+</div>
                <div class="text-sm text-gray-600">Happy Writers</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-journal-charcoal">48hrs</div>
                <div class="text-sm text-gray-600">Delivery Time</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-journal-charcoal">15+</div>
                <div class="text-sm text-gray-600">Journal Types</div>
              </div>
            </div>
          </div>
  
          <!-- Journal Showcase -->
          <div class="relative animate-fade-in">
            <div class="relative">
              <!-- Main Journal Image -->
              <div class="journal-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Premium Journal"
                  class="w-full h-80 object-cover rounded-lg"
                >
                <div class="mt-4 text-center">
                  <h3 class="font-serif font-semibold text-lg">The Wealth Builder</h3>
                  <p class="text-gray-600 text-sm">For Gen Z Financiers</p>
                </div>
              </div>
  
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-journal-gold rounded-full flex items-center justify-center animate-bounce-gentle">
                <span class="text-white font-bold">NEW</span>
              </div>
              
              <div class="absolute -bottom-4 -left-4 glass-effect rounded-lg p-3">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span class="text-sm font-medium">In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // Hero section logic
  </script>
  
  <style scoped>
  .bg-cross-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  </style>