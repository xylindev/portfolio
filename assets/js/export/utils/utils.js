export class Utils {
    static currentSection = document.querySelector('.home')
    static currentLanguage = 'fr'
}

export const goToSection = (buttons, frContent, enContent) => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            Utils.currentSection.classList.toggle('hidden')
            
            if(Utils.currentLanguage === 'fr'){
                frContent.classList.toggle('hidden')
                Utils.currentSection = frContent
            } else {
                enContent.classList.toggle('hidden')
                Utils.currentSection = enContent
            }
        })
    })
}