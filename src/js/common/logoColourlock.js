import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'

export async function initLogoColourlock() {
    await loadComponent('#logoColourlock', '/components/logoColourlock.html')
    
    Observer.start();   

    
}