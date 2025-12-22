import { closeSettings, openSettings } from "./home/settings.js"
import { checkLanguages, languagesToggle } from "./settings/languages.js"

const main = () => {
    openSettings()
    closeSettings()
    languagesToggle()
    checkLanguages()
}

main()