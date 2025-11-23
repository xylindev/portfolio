import { languageToggle } from "./language.js";
import { menuToggle, sectionToogle } from "./nav.js";
import { applyTheme } from "./theme.js";

export const header = () => {
    languageToggle()
    applyTheme()
    menuToggle()
    sectionToogle()
}