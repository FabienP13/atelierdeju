import { initNavbar } from './common/navbar.js'
import { initFooter } from './common/footer.js'
import { initPrestations } from './common/prestations.js'
import { InitLocalisation } from './common/localisation.js'

const formulaire = document.querySelector("form#contact")
const inputNom = formulaire.querySelector('input[name="nom"]');
const inputTelephone = formulaire.querySelector('input[name="telephone"]');
const inputEmail = formulaire.querySelector('input[name="email"]');
const textareaMessage = formulaire.querySelector('textarea[name="message"]');

let divAlert = document.querySelector('#alerte')
let h6_alert = document.querySelector('#alerte h6')
let divAlertSuccess = document.querySelector('#alerte_succes')
let h6_alert_success = document.querySelector('#alerte_succes h6')

h6_alert.setAttribute('style', 'white-space: pre-line;text-align:left;margin-bottom: 0px;');
h6_alert.textContent = ''

h6_alert_success.setAttribute('style', 'white-space: pre-line;text-align:left;margin-bottom: 0px;');
h6_alert_success.textContent = ''

await initNavbar()
await initFooter()
await initPrestations()
await InitLocalisation()

const formTimeInput = formulaire.querySelector('#form_time');
formTimeInput.value = Math.floor(Date.now() / 1000);

formulaire.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(formulaire);
    h6_alert.innerHTML = ''
    divAlert.classList.add('hidden')
    h6_alert_success.innerHTML = ''
    divAlertSuccess.classList.add('hidden')

    const isNomValid = validateNom();
    const isTelephoneValid = validateTelephone();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNomValid || !isTelephoneValid || !isEmailValid || !isMessageValid) {
    // 👉 scroll vers l’alerte erreur
    scrollToElement(divAlert);
    return;
}


    try {
        const response = await fetch('/backend/contact.php', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        
        if (data.success) {
            //TODO : faire remonter la page en haut (pour voir l'alerte)
            scrollToElement(divAlertSuccess);
            divAlertSuccess.classList.remove('hidden')
            h6_alert_success.textContent = 'Message envoyé ✅';
            formulaire.reset();
        } else {
            divAlert.classList.remove('hidden')
            h6_alert.textContent = 'Erreur : ' + data.error;

            scrollToElement(divAlert);
        }

        // document.querySelector("#bordure").classList.remove('border border-slate-300')
    } catch (error) {
        h6_alert.textContent = 'Erreur réseau ❌';
    }
});


function validateNom() {
    const value = inputNom.value.trim();

    const regexNom = /^[\p{L}]+(?:[\s-][\p{L}]+)*$/u;

    if (!value) {
        showError(inputNom, 'Le nom est requis');
        return false;
    }

    if (!regexNom.test(value)) {
        showError(inputNom,
            'Le nom ne doit contenir que des lettres (accents autorisés)'
        );
        return false;
    }

    hideError(inputNom);
    return true;
}

function validateTelephone() {
    // on supprime TOUT ce qui n’est pas un chiffre
    const cleanedValue = inputTelephone.value.replace(/\D/g, '');

    if (!cleanedValue) {
        showError(inputTelephone, 'Le numéro de téléphone est requis');
        return false;
    }

    if (cleanedValue.length !== 10) {
        showError(
            inputTelephone,
            'Le numéro doit contenir 10 chiffres'
        );
        return false;
    }

    // 👉 on remet la valeur nettoyée dans l’input AVANT l’envoi
    inputTelephone.value = cleanedValue;

    hideError(inputTelephone);
    return true;
}

function validateEmail() {
    const value = inputEmail.value.trim();

    // Regex fiable sans être trop stricte
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!value) {
        showError(inputEmail, 'L’adresse email est requise');
        return false;
    }

    if (!regexEmail.test(value)) {
        showError(
            inputEmail,
            'Veuillez entrer une adresse email valide'
        );
        return false;
    }

    // on remet la valeur nettoyée
    inputEmail.value = value;

    hideError(inputEmail);
    return true;
}

function validateMessage() {
    const value = textareaMessage.value.trim();

    if (!value) {
        showError(textareaMessage, 'Le message est requis');
        return false;
    }

    if (value.length < 10) {
        showError(
            textareaMessage,
            'Le message doit contenir au moins 10 caractères'
        );
        return false;
    }

    if (value.length > 1000) {
        showError(
            textareaMessage,
            'Le message ne doit pas dépasser 1000 caractères'
        );
        return false;
    }

    // on remet la valeur nettoyée
    textareaMessage.value = value;

    hideError(textareaMessage);
    return true;
}

function showError(element, message) {
    const id = element.getAttribute('id')
    h6_alert.textContent += message + '.\n';
    divAlert.classList.remove('hidden');

    if (id !== 'message') {
        let div = element.closest('div')
        div.classList.add(
            'ring-1',
            'ring-red-600',
            'border-red-600'
        );
    } else {
        element.classList.add('ring-1',
            'ring-red-600',
            'border-red-600')
    }



}

function hideError(element) {
    const id = element.getAttribute('id');

    if (id !== 'message') {
        const div = element.closest('div');
        div.classList.remove(
            'ring-1',
            'ring-red-600',
            'border-red-600'
        );
        div.classList.add('border', 'border-slate-300');
    } else {
        element.classList.remove(
            'ring-1',
            'ring-red-600',
            'border-red-600'
        );
        element.classList.add('border', 'border-slate-300');
    }
}

function scrollToElement(element) {
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: elementTop - navbarHeight - 186,
        behavior: 'smooth'
    });
}