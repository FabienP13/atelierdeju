export function initDiffSlider() {
  document.querySelectorAll('.diff').forEach(diff => {
    const input = diff.querySelector('input[type="range"]')
    if (!input) return

    diff.addEventListener('touchmove', (e) => {
      e.preventDefault()
      const touch = e.touches[0]
      const rect = diff.getBoundingClientRect()
      const x = touch.clientX - rect.left
      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      input.value = percent
      input.dispatchEvent(new Event('input'))
    }, { passive: false })

    diff.addEventListener('touchstart', (e) => {
      const touch = e.touches[0]
      const rect = diff.getBoundingClientRect()
      const x = touch.clientX - rect.left
      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      input.value = percent
      input.dispatchEvent(new Event('input'))
    }, { passive: false })
  })
}