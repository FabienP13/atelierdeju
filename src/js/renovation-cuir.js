import { initNavbar } from './common/navbar.js'
import { initFooter } from './common/footer.js'
import { Observer } from 'tailwindcss-intersect';
import { loadComponent } from '/src/js/common/components.js'
import { InitBoutonDevisGratuit } from './common/boutonDevisGratuit.js'
import { initDiffSlider } from './common/diffSlider.js'

Observer.start(); 

await initNavbar()
await initFooter()
await InitRealisationCuir()
await InitIntroCuir()
await InitPourquoiAtelierDeJu()
await InitBoutonDevisGratuit()
await InitLogoEntrepriseCuir()
initDiffSlider()

export async function InitRealisationCuir() {
    await loadComponent('#realisation-cuir', '/components/realisations-cuir.html')
    
    Observer.start();   
}

export async function InitIntroCuir() {
    await loadComponent('#intro_cuir', '/components/introduction-renovation-cuir.html')
    
    Observer.start();   
}
export async function InitPourquoiAtelierDeJu() {
    await loadComponent('#pourquoi-atelier-de-ju', '/components/pourquoi-atelier-de-ju.html')
    
    Observer.start();   
}

export async function InitLogoEntrepriseCuir() {
    await loadComponent('#logoEntrepriseCuir', '/components/logo-entreprise-cuir.html')
    
    Observer.start();   
}
