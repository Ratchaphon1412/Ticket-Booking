/* import the fontawesome core */
import { library,config } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faTwitch, faGithubSquare ,fab} from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import { faUserSecret,faCouch } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faHatWizard, faTwitterSquare, faTwitch, faGithubSquare,faCouch)
config.autoAddCss = false;


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
})