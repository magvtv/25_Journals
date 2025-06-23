<template>
    <section id="inklink" class="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span class="w-2 h-2 bg-journal-gold rounded-full animate-pulse"></span>
            <span class="text-sm font-medium">Coming Soon</span>
          </div>
          
          <h2 class="text-3xl md:text-5xl font-serif font-bold mb-6">
            Meet InkLink
            <br>
            <span class="text-journal-gold">Your AI Journaling Companion</span>
          </h2>
          
          <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The future of journaling is here. InkLink bridges your handwritten thoughts with intelligent digital assistance, 
            creating a seamless experience between analog reflection and AI-powered insights.
          </p>
        </div>
  
        <!-- Feature Preview -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <!-- Phone Mockup -->
          <div class="relative">
            <div class="mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div class="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                <!-- Phone Screen Content -->
                <div class="h-full flex flex-col">
                  <!-- Header -->
                  <div class="bg-primary-600 text-white p-4 text-center">
                    <h3 class="font-semibold">InkLink Companion</h3>
                    <p class="text-xs opacity-80">Connected to: The Wealth Builder</p>
                  </div>
                  
                  <!-- Content -->
                  <div class="flex-1 p-4 space-y-4">
                    <!-- Daily Prompt -->
                    <div class="bg-blue-50 p-3 rounded-lg">
                      <h4 class="font-medium text-gray-800 text-sm mb-2">Today's Reflection</h4>
                      <p class="text-xs text-gray-600">"What's one financial decision you made this week that you're proud of?"</p>
                    </div>
                    
                    <!-- Memory Recall -->
                    <div class="bg-yellow-50 p-3 rounded-lg">
                      <h4 class="font-medium text-gray-800 text-sm mb-2">Remember This?</h4>
                      <p class="text-xs text-gray-600">"Two weeks ago, you wrote about wanting to save KES 10,000. How's that going?"</p>
                    </div>
                    
                    <!-- Progress -->
                    <div class="bg-green-50 p-3 rounded-lg">
                      <h4 class="font-medium text-gray-800 text-sm mb-2">Your Progress</h4>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      <p class="text-xs text-gray-600 mt-1">75% towards your monthly goal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 bg-journal-gold text-journal-charcoal px-3 py-1 rounded-full text-sm font-bold animate-bounce-gentle">
              AI Powered
            </div>
          </div>
  
          <!-- Features List -->
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-journal-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-journal-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Smart Daily Prompts</h3>
                <p class="text-blue-100">Personalized questions based on your journal type and writing patterns to spark deeper reflection.</p>
              </div>
            </div>
  
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-journal-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-journal-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Memory Assistant</h3>
                <p class="text-blue-100">Never lose track of important insights. InkLink reminds you of past entries and helps connect ideas over time.</p>
              </div>
            </div>
  
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-journal-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-journal-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p class="text-blue-100">Visualize your growth journey with intelligent analytics that understand your goals and celebrate your wins.</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- CTA Section -->
        <div class="text-center">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 class="text-2xl font-bold mb-4">Be Among the First to Experience InkLink</h3>
            <p class="text-blue-100 mb-6">
              Join our early access list and get InkLink free for 3 months when you purchase any journal.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-journal-gold hover:bg-yellow-500 text-journal-charcoal font-bold py-3 px-8 rounded-lg transition-all duration-200">
                Join Early Access
              </button>
              <button class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // InkLink section logic
  </script>