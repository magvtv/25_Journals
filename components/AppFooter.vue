<template>
  <footer class="bg-journal-charcoal text-white">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">BJ</span>
            </div>
            <span class="font-serif font-semibold text-xl">Book Journal Studio</span>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            Not just a book. It's an extension of your mind. Discover journals crafted for thinkers, planners, and creators.
          </p>
          <p class="text-sm text-gray-400">
            📍 Fast delivery in Nairobi - Under 48 hours
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-gray-300">
            <li><NuxtLink to="#journals" class="hover:text-white transition-colors">Our Journals</NuxtLink></li>
            <li><NuxtLink to="#about" class="hover:text-white transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="#testimonials" class="hover:text-white transition-colors">Reviews</NuxtLink></li>
            <li><NuxtLink to="#inklink" class="hover:text-white transition-colors">InkLink</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold mb-4">Get in Touch</h3>
          <ul class="space-y-2 text-gray-300">
            <li>📧 hello@bookjournalstudio.com</li>
            <li>📱 +254 700 000 000</li>
            <li>🕒 Mon-Fri 9AM-6PM</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © 2024 Book Journal Studio. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>