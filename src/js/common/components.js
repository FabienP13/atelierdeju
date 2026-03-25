export async function loadComponent(selector, path) {
  const targets = document.querySelectorAll(selector)
  if (!targets.length) return

  const response = await fetch(path)
  const html = await response.text()

  targets.forEach(target => {
    target.innerHTML = html
  })
}