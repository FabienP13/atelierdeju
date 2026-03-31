import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'

export async function InitBoutons() {
    await loadComponent('.boutons', '/src/components/boutons.html')
    
    Observer.start();   

    
}