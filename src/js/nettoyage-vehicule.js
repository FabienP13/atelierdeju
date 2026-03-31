import { initNavbar } from './common/navbar.js'
import { initFooter } from './common/footer.js'
import { Observer } from 'tailwindcss-intersect';
import { loadComponent } from '/src/js/common/components.js'
import { InitBoutonQuestion } from './common/boutonQuestion.js'
import { InitServicesNettoyage } from './common/services.js'
import { InitJSOnglet } from './common/offres-nettoyage.js';

await initNavbar()
await InitIntroductionNettoyage()
await InitServicesNettoyage()
await InitOffresNettoyage()
await InitRealisationsNettoyage()
await initFooter()
await InitBoutonQuestion()

export async function InitIntroductionNettoyage() {
    await loadComponent('#intro_nettoyage', '/src/components/introduction-nettoyage-vehicule.html')
    
    Observer.start();   
}

export async function InitOffresNettoyage() {
    await loadComponent('#offres_nettoyage', '/src/components/offres-nettoyage-onglet.html')
    InitJSOnglet()
    Observer.start();   
}

export async function InitRealisationsNettoyage() {
    await loadComponent('#realisation-nettoyage', '/src/components/realisations-nettoyage.html')
    
    Observer.start();   
}




