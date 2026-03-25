import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'


export async function initPrestations() {
    await loadComponent('#prestations', '/src/components/prestations.html')
    
    Observer.start();   
}

