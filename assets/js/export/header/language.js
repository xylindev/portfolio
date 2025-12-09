import { Utils } from "../utils/utils.js"

const flagIcon = document.querySelector('.flag-icon')

const enFlag = 'flag-icon-gb'
const frFlag = 'flag-icon-fr'

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

    if(localStorage.getItem('language') === 'en'){
        Utils.currentSection = document.querySelector(`.${sectionClass}.en`)
        Utils.currentSection.classList.toggle('hidden')
    } else {
        Utils.currentSection = document.querySelector(`.${sectionClass}.fr`)
        Utils.currentSection.classList.toggle('hidden')
    }
}

export const languageToggle = () => {
    flagIcon.addEventListener('click', () => {
        if(flagIcon.classList.toggle(frFlag)){
            flagIcon.classList.remove(enFlag)
            localStorage.setItem('language', 'fr')
        } else {
            flagIcon.classList.add(enFlag)
            localStorage.setItem('language', 'en')
        }
        applyLanguage()
    })
}

export const loadLanguage = () => {
    if(localStorage.getItem('language') === 'en'){
        applyLanguage()
        flagIcon.classList.remove(frFlag)
        flagIcon.classList.add(enFlag)
    }
}