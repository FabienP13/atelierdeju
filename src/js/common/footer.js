import '@tailwindplus/elements'
import { loadComponent } from '/src/js/common/components.js'

export async function initFooter() {
    await loadComponent('#footer', '/components/footer.html')
}