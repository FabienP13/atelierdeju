import { initNavbar } from './common/navbar.js'
import { initFooter } from './common/footer.js'
import { Observer } from 'tailwindcss-intersect';
import { loadComponent } from '/src/js/common/components.js'
import { InitBoutonDevisGratuit } from './common/boutonDevisGratuit.js'

Observer.start(); 

await initNavbar()
await initFooter()
await InitRealisationCuir()
await InitIntroCuir()
await InitPourquoiAtelierDeJu()
await InitBoutonDevisGratuit()

export async function InitRealisationCuir() {
    await loadComponent('#realisation-cuir', '/src/components/realisations-cuir.html')
    
    Observer.start();   
}

export async function InitIntroCuir() {
    await loadComponent('#intro_cuir', '/src/components/introduction-renovation-cuir.html')
    
    Observer.start();   
}
export async function InitPourquoiAtelierDeJu() {
    await loadComponent('#pourquoi-atelier-de-ju', '/src/components/pourquoi-atelier-de-ju.html')
    
    Observer.start();   
}