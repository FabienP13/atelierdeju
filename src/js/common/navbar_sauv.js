import '@tailwindplus/elements'
import { loadComponent } from '/src/js/common/components.js'

export async function initNavbar() {
  await loadComponent('#navbar', '/src/components/navbar.html')

  const main = document.querySelector('#header')
  const nav = document.querySelector('.navbar')
  const mobileMenu = document.querySelector('#mobile-menu')

  if (!nav || !mobileMenu || !main) return

  const toggleButton = nav.querySelector('[command="--toggle"]')
  const isDesktop = () => window.matchMedia('(min-width: 640px)').matches

  function updateNavbar() {
    if (isDesktop()) {
      nav.classList.toggle('scrolled', window.scrollY > 0)
    } else {
      const menuOpen = !mobileMenu.hasAttribute('hidden')
      nav.classList.toggle('scrolled', menuOpen)
    }
  }

  function offsetMain() {
    const navHeight = nav.offsetHeight
    main.style.paddingTop = `${navHeight + 150}px`
  }

  function setActiveNavLink() {
    const currentPath = window.location.pathname
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPath = new URL(link.href).pathname
      link.classList.toggle('active', linkPath === currentPath)
    })
  }

  /* Events */
  window.addEventListener('scroll', updateNavbar)
  window.addEventListener('resize', () => {
    updateNavbar()
    offsetMain()
  })

  toggleButton?.addEventListener('click', () => {
    requestAnimationFrame(updateNavbar)
  })

  /* Init */
  offsetMain()
  updateNavbar()
  setActiveNavLink()
}