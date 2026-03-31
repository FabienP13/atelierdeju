import { initNavbar } from './common/navbar.js'
import { initFooter } from './common/footer.js'
import { Observer } from 'tailwindcss-intersect';
import { loadComponent } from '/src/js/common/components.js'
import { InitBoutonDevisGratuit } from './common/boutonDevisGratuit.js'

await initNavbar()
await initFooter()
await InitIntroductionCarresserie()
await InitOffresCarresserie()
await InitRealisationCarrosserie()
await InitBoutonDevisGratuit()

export async function InitIntroductionCarresserie() {
    await loadComponent('#intro_carrosserie', '/src/components/introduction-renovation-carrosserie.html')
    
    Observer.start();   
}

export async function InitOffresCarresserie() {
    await loadComponent('#offres_carrosserie', '/src/components/offres-carrosserie.html')
    
    Observer.start();   
}

export async function InitRealisationCarrosserie() {
    await loadComponent('#realisation-carrosserie', '/src/components/realisations-carrosserie.html')
    
    Observer.start();   

    
}