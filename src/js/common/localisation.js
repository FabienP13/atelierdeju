import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'

export async function InitLocalisation() {
    await loadComponent('#maps', '/components/localisation.html')
    
    Observer.start();   
}