<template>
    <section id="testimonials" class="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-journal-charcoal mb-4">
            Our Customers Love Their Journals
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from people who've transformed their thinking and planning with our journals.
          </p>
        </div>
  
        <!-- Testimonials Carousel -->
        <div class="relative max-w-4xl mx-auto">
          <div class="overflow-hidden rounded-2xl">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentTestimonial * 100}%)` }"
            >
              <div 
                v-for="testimonial in testimonials" 
                :key="testimonial.id"
                class="w-full flex-shrink-0"
              >
                <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg mx-4">
                  <div class="text-center">
                    <!-- Quote -->
                    <div class="mb-6">
                      <svg class="w-12 h-12 text-primary-200 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                      <blockquote class="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                        "{{ testimonial.quote }}"
                      </blockquote>
                    </div>
  
                    <!-- Author -->
                    <div class="flex items-center justify-center space-x-4">
                      <img 
                        :src="testimonial.avatar" 
                        :alt="testimonial.name"
                        class="w-16 h-16 rounded-full object-cover"
                      >
                      <div class="text-left">
                        <div class="font-semibold text-journal-charcoal">{{ testimonial.name }}</div>
                        <div class="text-primary-600 font-medium">{{ testimonial.title }}</div>
                        <div class="text-sm text-gray-500">{{ testimonial.location }}</div>
                      </div>
                    </div>
  
                    <!-- Journal Used -->
                    <div class="mt-6 inline-flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                      <span class="text-sm text-gray-600">Uses:</span>
                      <span class="text-sm font-medium text-journal-charcoal">{{ testimonial.journal }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Navigation Buttons -->
          <button 
            @click="prevTestimonial"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-10"
            :disabled="currentTestimonial === 0"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
  
          <button 
            @click="nextTestimonial"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-10"
            :disabled="currentTestimonial >= testimonials.length - 1"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
  
        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="currentTestimonial = index"
            class="w-3 h-3 rounded-full transition-colors"
            :class="currentTestimonial === index ? 'bg-primary-600' : 'bg-gray-300'"
          ></button>
        </div>
  
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
          <div class="text-center">
            <div class="text-3xl font-bold text-journal-charcoal mb-2">500+</div>
            <div class="text-gray-600">Happy Customers</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-journal-charcoal mb-2">4.9★</div>
            <div class="text-gray-600">Average Rating</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-journal-charcoal mb-2">48hrs</div>
            <div class="text-gray-600">Delivery Time</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-journal-charcoal mb-2">95%</div>
            <div class="text-gray-600">Reorder Rate</div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const currentTestimonial = ref(0)
  
  const testimonials = [
    {
      id: 1,
      quote: "The Wealth Builder journal completely changed how I think about money. I've saved KES 50,000 in just 3 months using the tracking system!",
      name: "Sarah Wanjiku",
      title: "Software Developer",
      location: "Nairobi, Kenya",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      journal: "The Wealth Builder"
    },
    {
      id: 2,
      quote: "As a content creator, The Creator's Canvas has been a game-changer. My content planning is now systematic and my engagement has doubled.",
      name: "Mike Ochieng",
      title: "Content Creator",
      location: "Mombasa, Kenya",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      journal: "The Creator's Canvas"
    },
    {
      id: 3,
      quote: "The Mind Garden journal helped me through a difficult period. The mindfulness exercises and gratitude practice have transformed my mental health.",
      name: "Grace Akinyi",
      title: "Teacher",
      location: "Kisumu, Kenya",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      journal: "The Mind Garden"
    },
    {
      id: 4,
      quote: "I've read over 50 books this year and The Wisdom Keeper helps me remember and apply everything I learn. It's like having a second brain!",
      name: "David Kimani",
      title: "Entrepreneur",
      location: "Nakuru, Kenya",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      journal: "The Wisdom Keeper"
    }
  ]
  
  const nextTestimonial = () => {
    if (currentTestimonial.value < testimonials.length - 1) {
      currentTestimonial.value++
    }
  }
  
  const prevTestimonial = () => {
    if (currentTestimonial.value > 0) {
      currentTestimonial.value--
    }
  }
  
  // Auto-advance testimonials
  onMounted(() => {
    setInterval(() => {
      if (currentTestimonial.value >= testimonials.length - 1) {
        currentTestimonial.value = 0
      } else {
        currentTestimonial.value++
      }
    }, 5000)
  })
  </script>