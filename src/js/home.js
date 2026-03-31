
import { initFooter } from './common/footer.js'
import { initNavbar } from './common/navbar.js'
import { initPrestations } from './common/prestations.js'
import { InitBoutonDevisSavoirPlus } from './common/boutonDevisSavoirPlus.js'
import { InitBoutons } from './common/boutons.js'
import { initRealisations } from './realisations.js'
import { InitIntroCuir } from './intro-renovation-cuir.js'
import { InitIntroCarrosserie } from './intro-renovation-carrosserie.js'
import { InitIntroNettoyage } from './intro-nettoyage-vehicule.js'
import { InitServicesNettoyage } from './common/services.js'

await initNavbar()
await initFooter()
await initPrestations()
await InitServicesNettoyage()
await initRealisations()
await InitIntroCuir()
await InitIntroCarrosserie()
await InitIntroNettoyage()
await InitBoutonDevisSavoirPlus()
await InitBoutons()
