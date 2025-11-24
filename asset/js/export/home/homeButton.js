import { Utils } from "../utils/utils.js"

const btnSkills = document.querySelectorAll('.go-to-skills')
const frSkills = document.querySelector('.skills.fr')
const enSkills = document.querySelector('.skills.en')

export const buttonClick = () => {
    btnSkills.forEach(btn => {
        btn.addEventListener('click', () => {
            Utils.currentSection.classList.toggle('hidden')
            
            if(Utils.currentLanguage === 'fr'){
                frSkills.classList.toggle('hidden')
                Utils.currentSection = frSkills
            } else {
                enSkills.classList.toggle('hidden')
                Utils.currentSection = enSkills
            }
        })
    })
}