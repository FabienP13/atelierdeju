import { initNavbar } from './common/navbar.js'
import { initFooter } from './common/footer.js'
import { Observer } from 'tailwindcss-intersect';
import { loadComponent } from '/src/js/common/components.js'
import { InitBoutonDevisGratuit } from './common/boutonDevisGratuit.js'

Observer.start(); 

await initNavbar()
await initFooter()
await InitRealisationCuir()
await InitBoutonDevisGratuit()

export async function InitRealisationCuir() {
    await loadComponent('#realisation-cuir', '/src/components/realisations-cuir.html')
    
    Observer.start();   

    
}