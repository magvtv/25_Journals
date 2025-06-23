<template>
    <div class="min-h-screen bg-journal-cream">
      <AppHeader />
      <main>
        <slot />
      </main>
      <AppFooter />
      <MobileMenu />
    </div>
  </template>
  
  <script setup lang="ts">
  // Layout logic can be added here
  </script>