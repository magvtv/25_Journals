import { defineStore } from 'pinia'

export const useMobileMenuStore = defineStore('mobileMenu', () => {
  const isOpen = ref(false)

  const open = () => {
    isOpen.value = true
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    isOpen.value = false
    // Restore body scroll
    document.body.style.overflow = 'unset'
  }

  const toggle = () => {
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }

  return {
    isOpen: readonly(isOpen),
    open,
    close,
    toggle
  }
})