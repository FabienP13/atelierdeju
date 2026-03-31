import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'

export async function InitBoutonQuestion() {
    
    await loadComponent('.btnQuestion', '/src/components/boutonQuestion.html')
    
    Observer.start();   

}