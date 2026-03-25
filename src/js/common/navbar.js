import '@tailwindplus/elements'
import { loadComponent } from '/src/js/common/components.js'

export async function initNavbar() {
  await loadComponent('#navbar', '/src/components/navbar.html')

  const main = document.querySelector('#header')
  const nav = document.querySelector('.nav')
  const mobileMenu = document.querySelector('#mobile-menu')

  if (!nav || !mobileMenu || !main) return

  const toggleButton = nav.querySelector('[command="--toggle"]')
  const isDesktop = () => window.matchMedia('(min-width: 768px)').matches

  function updateNavbar() {
    const scrolled = window.scrollY > 0

    if (isDesktop()) {
      nav.classList.toggle('scrolled', scrolled)
    } else {
      const menuOpen = !mobileMenu.hasAttribute('hidden')
      nav.classList.toggle('scrolled', scrolled || menuOpen)
    }
  }

  function offsetMain() {
    const navHeight = nav.offsetHeight
    main.style.paddingTop = `${navHeight + 4}px`
  }

  function setActiveNavLink() {
    const currentPath = window.location.pathname
    document.querySelectorAll('.nav-link').forEach(link => {
      
      if(currentPath != '/contact.html'){
        const linkPath = new URL(link.href).pathname
        link.classList.toggle('active', linkPath === currentPath)
      }
      
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