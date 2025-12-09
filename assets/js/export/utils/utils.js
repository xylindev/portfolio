export class Utils {
    static currentSection = document.querySelector('.home')
}

export const goToSection = (buttons, frContent, enContent) => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            Utils.currentSection.classList.toggle('hidden')
            if(localStorage.getItem('language') === 'fr'){
                frContent.classList.toggle('hidden')
                Utils.currentSection = frContent
            } else {
                enContent.classList.toggle('hidden')
                Utils.currentSection = enContent
            }
        })
    })
}