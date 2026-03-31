
const data = {
    interieur: {
        label: 'Intérieur',
        express: {
            title: 'EXPRESS Intérieur',
            desc: 'Pour un nettoyage rapide réalisé par un professionnel.',
            prix: { citadine: '55 €', suv: '75 €' },
            items: [
                'Vitres intérieures',
                'Dépoussiérage plastiques intérieurs',
                'Aspiration express habitacle/coffre'
            ]
        },
        vip: {
            title: 'VIP Intérieur',
            desc: 'Prestation complète et aboutie pour un résultat premium.',
            prix: { citadine: '80 €', suv: '110 €' },
            items: [
                'Vitres intérieures',
                'Dépoussiérage & décrassage plastiques/tableau de bord',
                'Aspiration en profondeur habitacle/coffre',
                'Nettoyage passages de portes',
                'Traitement anti-odeur/antibactérien',
                'Baume plastiques/cuir'
            ]
        }
    },
    exterieur: {
        label: 'Extérieur',
        express: {
            title: 'EXPRESS Extérieur',
            desc: 'Un extérieur propre rapidement et sans micro-rayures.',
            prix: { citadine: '45 €', suv: '65 €' },
            items: [
                'Lavage carrosserie',
                'Vitres extérieures',
                'Nettoyage des jantes'
            ]
        },
        vip: {
            title: 'VIP Extérieur',
            desc: 'Extérieur haut de gamme, lustrage et décrassage complet.',
            prix: { citadine: '69 €', suv: '90 €' },
            items: [
                'Démoustiquage carrosserie',
                'Prélavage + lavage + lustrage carrosserie',
                'Vitres extérieures',
                'Nettoyage et décrassage des jantes'
            ]
        }
    },
    complet: {
        label: 'Formule Complète',
        express: {
            title: 'EXPRESS Complet',
            desc: 'Le combo parfait pour un véhicule propre dedans comme dehors.',
            prix: { citadine: '85 €', suv: '110 €' },
            items: [
                'Lavage carrosserie',
                'Nettoyage vitres ext. / int.',
                'Nettoyage des jantes',
                'Dépoussiérage plastiques intérieurs',
                'Aspiration express habitacle/coffre'
            ]
        },
        vip: {
            title: 'VIP Complet',
            desc: 'La remise à neuf totale. Résultat exceptionnel garanti.',
            prix: { citadine: '129 €', suv: '169 €' },
            items: [
                'Prélavage + lavage + lustrage carrosserie',
                'Démoustiquage carrosserie',
                'Nettoyage vitres ext. / int.',
                'Nettoyage et décrassage des jantes',
                'Nettoyage passages de portes',
                'Nettoyage plastiques intérieurs',
                'Aspiration en profondeur habitacle/coffre',
                'Baume plastiques/cuir',
                'Traitement anti-odeur/antibactérien'
            ]
        }
    }
}

let vehicule = 'citadine'
let prestation = 'interieur'

function setVehicule(v) {
    vehicule = v
    document.querySelectorAll('.vehicule-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-black')
        btn.classList.add('text-white')
    })
    const active = document.getElementById('btn-' + v)
    active.classList.add('bg-white', 'text-black')
    active.classList.remove('text-white')
    render()
}

function setPrestation(p) {
    prestation = p
    document.querySelectorAll('.prestation-btn').forEach(btn => {
        btn.classList.remove('border-brown2', 'text-brown2')
        btn.classList.add('border-transparent', 'text-neutral-500')
    })
    const active = document.getElementById('btn-' + p)
    active.classList.add('border-brown2', 'text-brown2')
    active.classList.remove('border-transparent', 'text-neutral-500')
    render()
}

function renderItems(id, items) {
    document.getElementById(id).innerHTML = items
        .map(i => `<li class="flex items-start gap-2"><span class="text-brown2">→</span> ${i}</li>`)
        .join('')
}

function render() {
    const d = data[prestation]

    document.getElementById('express-title').textContent = d.express.title
    document.getElementById('express-desc').textContent = d.express.desc
    document.getElementById('express-price').textContent = d.express.prix[vehicule]
    renderItems('express-items', d.express.items)

    document.getElementById('vip-title').textContent = d.vip.title
    document.getElementById('vip-desc').textContent = d.vip.desc
    document.getElementById('vip-price').textContent = d.vip.prix[vehicule]
    renderItems('vip-items', d.vip.items)
}

export function InitJSOnglet() {
    document.getElementById('btn-citadine').addEventListener('click', () => setVehicule('citadine'))
    document.getElementById('btn-suv').addEventListener('click', () => setVehicule('suv'))
    document.getElementById('btn-interieur').addEventListener('click', () => setPrestation('interieur'))
    document.getElementById('btn-exterieur').addEventListener('click', () => setPrestation('exterieur'))
    document.getElementById('btn-complet').addEventListener('click', () => setPrestation('complet'))
}