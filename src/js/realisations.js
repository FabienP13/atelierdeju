import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'

export async function initRealisations() {
    await loadComponent('#realisations', '/src/components/realisations.html')
    
    Observer.start();   

    
}