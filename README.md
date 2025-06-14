# 📓 25_Journals

A modern, customizable journal platform for thinkers, planners, and creators—built with Vue.js, Nuxt, TailwindCSS, Flowbite, and TypeScript (using Bun for blazing-fast builds).  

> "Not just a book. It's an extension of your mind."

---

## 🧠 Concept

**Book Journal Studio** is a web-based platform that allows users to explore and customize a range of uniquely themed book journals. Designed for niche audiences—from Gen Z wealth planners to content creators and bibliophiles—the platform enables users to select, personalize, and purchase journals tailored to their mental space, goals, and lifestyle needs.

---

## 🌍 Target Audiences

- **Gen Z financiers** → Wealth planners
- **Content creators** → Idea logbooks
- **Bibliophiles** → Book wisdom journals
- **Mental wellness advocates** → Thought therapy journals
- **Project managers** → Brainstorm sketchbooks

And many more.

---

## 🚀 Live Preview

> Coming soon: `https://bookjournalstudio.vercel.app`

---

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3 + Nuxt 3 (TypeScript)
- **Bundler**: Bun (instead of npm)
- **Styling**: TailwindCSS + Flowbite UI Kit
- **Responsiveness**: Fully mobile-optimized (using a responsive carousel, dynamic layout scaling, modal-based menu on small screens)
- **Form**: Headless form strategy for user interaction (e.g., pre-orders, surveys)
- **Hosting**: Vercel (tentative)

---

## 📦 Features (v1.0)

> ⚠️ For future enhancements and improvements, check the [Issues section](../../issues)

- [x] Responsive Landing Page with Hero Section
- [x] Book Types Carousel (Best Sellers, "Find Your Favorite", Others)
- [x] Testimonial Carousel ("Our Customers")
- [x] Overlay-style Navigation Menu for mobile
- [x] Journal Type Previews with customizable purchase CTA
- [x] Delivery note: Journals delivered within 2 days (Nairobi)

---

## 💡 Validation Strategy

Before scaling, we use a **validation hack** method:

- Live MVP landing page to gauge interest
- Ads targeting specific groups (e.g., Gen Z, financiers, readers)
- Pre-order survey via Typeform
- Prototype journals through a small local batch
- Conversion analytics + user interviews

---

## 📁 Project Structure

book-journal-studio/
│

├── assets/ # Static images & fonts

├── components/ # Vue components

├── layouts/ # Default layouts

├── pages/ # App routes

├── public/ # Public files

├── styles/ # Tailwind config & global styles

├── utils/ # Shared helpers

├── app.config.ts # App configuration

├── nuxt.config.ts # Nuxt configuration

└── README.md # What you are reading
