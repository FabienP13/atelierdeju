import { initNavbar } from './common/navbar.js'
import { initFooter } from './common/footer.js'
import { Observer } from 'tailwindcss-intersect';
import { loadComponent } from '/src/js/common/components.js'
import { InitBoutonDevisGratuit } from './common/boutonDevisGratuit.js'
import { initDiffSlider } from './common/diffSlider.js'
import { InitLocalisation } from './common/localisation.js'

await initNavbar()
await initFooter()
await InitIntroductionCarresserie()
await InitOffresCarresserie()
await InitRealisationCarrosserie()
await InitBoutonDevisGratuit()
initDiffSlider()
await InitLocalisation()

export async function InitIntroductionCarresserie() {
    await loadComponent('#intro_carrosserie', '/components/introduction-renovation-carrosserie.html')
    
    Observer.start();   
}

export async function InitOffresCarresserie() {
    await loadComponent('#offres_carrosserie', '/components/offres-carrosserie.html')
    
    Observer.start();   
}

export async function InitRealisationCarrosserie() {
    await loadComponent('#realisation-carrosserie', '/components/realisations-carrosserie.html')
    
    Observer.start();   

    
}