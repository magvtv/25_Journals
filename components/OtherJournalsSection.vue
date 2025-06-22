<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-journal-charcoal mb-4">
          More Journals to Explore
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover specialized journals for every aspect of your life and growth journey.
        </p>
      </div>

      <!-- Journals Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="journal in otherJournals"
          :key="journal.id"
          class="group cursor-pointer"
          @click="openJournalModal(journal)"
        >
          <div class="journal-card h-full">
            <div class="relative overflow-hidden">
              <img 
                :src="journal.image" 
                :alt="journal.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="text-sm font-medium">{{ journal.shortDesc }}</p>
              </div>
            </div>
            
            <div class="p-4">
              <h3 class="font-serif font-semibold text-lg text-journal-charcoal mb-1 group-hover:text-primary-600 transition-colors">
                {{ journal.title }}
              </h3>
              <p class="text-primary-600 text-sm font-medium mb-2">{{ journal.subtitle }}</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-journal-charcoal">KES {{ journal.price }}</span>
                <span class="text-xs text-gray-500">{{ journal.pages }} pages</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coming Soon Teaser -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-primary-100 px-6 py-3 rounded-full">
          <span class="text-primary-600 font-medium">🚀 More journals launching soon</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const otherJournals = [
  {
    id: 9,
    title: "The Travel Tales",
    subtitle: "For Adventurers",
    price: 700,
    pages: 200,
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    shortDesc: "Document your journeys and discoveries",
    description: "Capture memories, plan adventures, and reflect on your travel experiences.",
    features: ["Trip planning", "Memory capture", "Photo spaces", "Reflection prompts"]
  },
  {
    id: 10,
    title: "The Recipe Keeper",
    subtitle: "For Food Lovers",
    price: 700,
    pages: 180,
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    shortDesc: "Your culinary journey documented",
    description: "Collect recipes, document cooking experiments, and track your culinary growth.",
    features: ["Recipe collection", "Cooking notes", "Meal planning", "Food memories"]
  },
  {
    id: 11,
    title: "The Parent's Guide",
    subtitle: "For New Parents",
    price: 700,
    pages: 220,
    image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=400",
    shortDesc: "Chronicle your parenting journey",
    description: "Document milestones, track growth, and capture precious parenting moments.",
    features: ["Milestone tracking", "Growth charts", "Memory keeping", "Parenting tips"]
  },
  {
    id: 12,
    title: "The Side Hustle",
    subtitle: "For Entrepreneurs",
    price: 700,
    pages: 240,
    image: "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=400",
    shortDesc: "Build your business systematically",
    description: "Plan, track, and grow your side business with structured guidance.",
    features: ["Business planning", "Revenue tracking", "Goal setting", "Network building"]
  }
]

const selectedJournal = ref(null)
const showModal = ref(false)

const openJournalModal = (journal: any) => {
  selectedJournal.value = journal
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedJournal.value = null
}
</script>