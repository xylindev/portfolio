import { closeDiscover, openDiscover } from "./home/discover.js"
import { closeSettings, openSettings } from "./home/settings.js"
import { reloadParagraph } from "./home/splash-text.js"
import { checkLanguages, languagesToggle } from "./settings/languages.js"

const main = () => {
    reloadParagraph()
    openSettings()
    closeSettings()
    languagesToggle()
    checkLanguages()
    openDiscover()
    closeDiscover()
}

main()