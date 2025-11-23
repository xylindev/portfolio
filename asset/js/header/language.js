import { Utils } from "../utils/utils.js"

const flagIcon = document.querySelector('.flag-icon')

const applyLanguage = () => {
    const sectionClass = Utils.currentSection.classList[0]
    const items = [
        ...document.querySelectorAll('nav .fr'), 
        ...document.querySelectorAll('nav .en')
    ]

    Utils.currentSection.classList.toggle('hidden')

    items.forEach(item => {
        item.classList.toggle('hidden')
    })

    if(Utils.currentLanguage == 'en'){
        Utils.currentSection = document.querySelector(`.${sectionClass}.en`)
        Utils.currentSection.classList.toggle('hidden')
    } else {
        Utils.currentSection = document.querySelector(`.${sectionClass}.fr`)
        Utils.currentSection.classList.toggle('hidden')
    }
}

export const languageToggle = () => {
    flagIcon.addEventListener('click', () => {
        if(flagIcon.classList.toggle('flag-icon-fr')){
            flagIcon.classList.remove('flag-icon-gb')
            Utils.currentLanguage = 'fr'
        } else {
            flagIcon.classList.add('flag-icon-gb')
            Utils.currentLanguage = 'en'
        }

        applyLanguage()
    })
}