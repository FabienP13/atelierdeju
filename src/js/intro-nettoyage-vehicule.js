import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'


export async function InitIntroNettoyage() {
    await loadComponent('#intro-nettoyage-vehicule', '/src/components/intro-nettoyage-vehicule.html')
    
    Observer.start();   

    
}