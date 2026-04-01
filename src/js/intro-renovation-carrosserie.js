import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'


export async function InitIntroCarrosserie() {
    await loadComponent('#intro-renovation-carrosserie', '/components/intro-renovation-carrosserie.html')
    
    Observer.start();   

    
}