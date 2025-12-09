import { languageToggle, loadLanguage } from "./language.js";
import { menuToggle, sectionToogle } from "./nav.js";
import { applyTheme, loadTheme } from "./theme.js";

export const header = () => {
    loadTheme()
    loadLanguage()
    languageToggle()
    applyTheme()
    menuToggle()
    sectionToogle()
}