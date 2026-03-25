import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'

export async function InitBoutonDevisGratuit() {
    await loadComponent('.btnDevisGratuit', '/src/components/boutonDevisGratuit.html')
    
    Observer.start();   

}