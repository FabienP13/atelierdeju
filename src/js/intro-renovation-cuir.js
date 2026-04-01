import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'


export async function InitIntroCuir() {
    await loadComponent('#intro-renovation-cuir', '/components/intro-renovation-cuir.html')
    
    Observer.start();   

    
}