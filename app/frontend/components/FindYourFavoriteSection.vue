<template>
    <section class="section-padding bg-gradient-to-br from-journal-cream to-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-journal-charcoal mb-4">
            Find Your Favorite
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Every mind is unique. Discover the journal that speaks to your goals, dreams, and daily rituals.
          </p>
        </div>
  
        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-6 py-3 rounded-full font-medium transition-all duration-200"
            :class="selectedCategory === category.id 
              ? 'bg-primary-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'"
          >
            {{ category.icon }} {{ category.name }}
          </button>
        </div>
  
        <!-- Filtered Journals Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="journal in filteredJournals"
            :key="journal.id"
            class="transform transition-all duration-300 hover:scale-105"
          >
            <JournalCard :journal="journal" />
          </div>
        </div>
  
        <!-- Show All Button -->
        <div class="text-center mt-12">
          <button class="btn-secondary">
            View All {{ totalJournals }} Journals
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const selectedCategory = ref('all')
  
  const categories = [
    { id: 'all', name: 'All Journals', icon: '📚' },
    { id: 'finance', name: 'Wealth Building', icon: '💰' },
    { id: 'creative', name: 'Creative', icon: '🎨' },
    { id: 'wellness', name: 'Wellness', icon: '🧘' },
    { id: 'productivity', name: 'Productivity', icon: '⚡' },
    { id: 'learning', name: 'Learning', icon: '🎓' }
  ]
  
  const allJournals = [
    {
      id: 5,
      title: "The Habit Architect",
      subtitle: "For Productivity Enthusiasts",
      price: 700,
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Design and track powerful habits that compound into extraordinary results.",
      features: ["Habit tracking", "Progress visualization", "Weekly reviews", "Motivation quotes"],
      category: 'productivity'
    },
    {
      id: 6,
      title: "The Dream Weaver",
      subtitle: "For Visionaries",
      price: 700,
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Transform your biggest dreams into actionable plans and daily practices.",
      features: ["Vision boarding", "Goal breakdown", "Action planning", "Dream tracking"],
      category: 'creative'
    },
    {
      id: 7,
      title: "The Learning Lab",
      subtitle: "For Lifelong Learners",
      price: 700,
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Capture insights, connect ideas, and accelerate your learning journey.",
      features: ["Note-taking system", "Concept mapping", "Learning goals", "Knowledge reviews"],
      category: 'learning'
    },
    {
      id: 8,
      title: "The Gratitude Garden",
      subtitle: "For Mindful Living",
      price: 700,
      image: "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Cultivate appreciation and mindfulness in your daily life.",
      features: ["Daily gratitude", "Mindfulness exercises", "Reflection prompts", "Mood tracking"],
      category: 'wellness'
    }
  ]
  
  const filteredJournals = computed(() => {
    if (selectedCategory.value === 'all') {
      return allJournals
    }
    return allJournals.filter(journal => journal.category === selectedCategory.value)
  })
  
  const totalJournals = computed(() => allJournals.length + 4) // Including best sellers
  </script>