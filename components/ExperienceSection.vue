<template>
  <section class="section-padding bg-journal-charcoal text-white overflow-hidden">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="animate-slide-up">
          <h2 class="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            The Complete
            <span class="text-gradient bg-gradient-to-r from-journal-gold to-yellow-400 bg-clip-text text-transparent">
              Journaling Experience
            </span>
          </h2>
          
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            We've reimagined journaling for the digital age. Your physical journal becomes the foundation, 
            while our AI companion helps you reflect, remember, and grow from your written thoughts.
          </p>

          <!-- Features List -->
          <div class="space-y-4 mb-8">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-journal-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Premium Physical Journal</h3>
                <p class="text-gray-300">High-quality paper, thoughtful layouts, and beautiful design</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-journal-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">InkLink AI Companion</h3>
                <p class="text-gray-300">Smart prompts, memory assistance, and reflection guidance</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-journal-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Habit Formation System</h3>
                <p class="text-gray-300">Gentle nudges and progress tracking to build lasting habits</p>
              </div>
            </div>
          </div>

          <button class="btn-primary bg-journal-gold hover:bg-yellow-500 text-journal-charcoal font-bold">
            Start Your Journey
          </button>
        </div>

        <!-- Visual Elements -->
        <div class="relative animate-fade-in">
          <!-- Main Image -->
          <div class="relative">
            <img 
              src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Journal and Phone"
              class="w-full h-96 object-cover rounded-2xl shadow-2xl"
            >
            
            <!-- Floating QR Code -->
            <div class="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-bounce-gentle">
              <div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                </svg>
              </div>
              <p class="text-xs text-gray-600 mt-2 text-center">Scan to<br>Connect</p>
            </div>

            <!-- Floating Stats -->
            <div class="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p class="text-sm font-semibold text-gray-800">Active Users</p>
                  <p class="text-xs text-gray-600">500+ and growing</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Background Pattern -->
          <div class="absolute inset-0 -z-10 opacity-10">
            <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="4"/></g></g></svg>')"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Experience section logic
</script>