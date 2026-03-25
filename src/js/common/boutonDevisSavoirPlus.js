import '@tailwindplus/elements'
import { Observer } from 'tailwindcss-intersect';

import { loadComponent } from '/src/js/common/components.js'

export async function InitBoutonDevisSavoirPlus() {
    await loadComponent('.btnDevis', '/src/components/boutonDevisSavoirPlus.html')
    
    Observer.start();   

    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const link = article.querySelector('.btnDevis a#savoirPlus');
        const customLink = article.dataset.link;
        
        if (link && customLink) {
            link.href = customLink; // Change le lien en fonction du data-link
        }
    });
}