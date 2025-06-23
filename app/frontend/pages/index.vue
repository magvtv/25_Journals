<template>
    <div>
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- Best Sellers -->
      <BestSellersSection />
      
      <!-- Find Your Favorite -->
      <FindYourFavoriteSection />
      
      <!-- Other Journals -->
      <OtherJournalsSection />
      
      <!-- Testimonials -->
      <TestimonialsSection />
      
      <!-- Experience Section -->
      <ExperienceSection />
      
      <!-- InkLink Teaser -->
      <InkLinkSection />
    </div>
  </template>
  
  <script setup lang="ts">
  // Page meta
  useHead({
    title: 'Book Journal Studio - Extension of Your Mind',
    meta: [
      {
        name: 'description',
        content: 'Discover journals crafted for thinkers, planners, and creators. From Gen Z wealth planners to content creators - find your perfect journal companion.'
      }
    ]
  })
  </script>