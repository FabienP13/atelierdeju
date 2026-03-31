import { Observer } from 'tailwindcss-intersect';
import { loadComponent } from '/src/js/common/components.js'

export async function InitServicesNettoyage() {
    await loadComponent('#services', '/src/components/services.html')
    
    Observer.start();   
}
