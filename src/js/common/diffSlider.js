export function initDiffSlider() {
  document.querySelectorAll('.diff').forEach(diffElement => {
    const resizer = diffElement.querySelector('.diff-resizer')
    if (!resizer) return

    let isDragging = false

    function setPosition(clientX) {
      const rect = diffElement.getBoundingClientRect()
      const x = clientX - rect.left
      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      // Simuler un drag natif sur le resizer
      const nativeWidth = (percent / 100) * rect.width
      resizer.style.width = nativeWidth + 'px'
    }

    diffElement.addEventListener('touchstart', (e) => {
      isDragging = true
      setPosition(e.touches[0].clientX)
    }, { passive: false })

    diffElement.addEventListener('touchmove', (e) => {
      if (!isDragging) return
      e.preventDefault()
      setPosition(e.touches[0].clientX)
    }, { passive: false })

    diffElement.addEventListener('touchend', () => {
      isDragging = false
    })
  })
}