const frInput = document.querySelector('#français')
const enInput = document.querySelector('#anglais')

const element = [
    ...document.querySelectorAll('.fr'),
    ...document.querySelectorAll('.en')
]

export const languagesToggle = () => {

    frInput.addEventListener('click', () => {
        for(let i=0; i<element.length; i++){
            element[i].classList.toggle('hidden')
        }

        localStorage.setItem('language', 'fr')
    })

    enInput.addEventListener('click', () => {
        for(let i=0; i<element.length; i++){
            element[i].classList.toggle('hidden')
        }

        localStorage.setItem('language', 'en')
    })
}

export const checkLanguages = () => {
    const language = localStorage.getItem('language')

    if(language === 'en'){
        frInput.attributes.removeNamedItem('checked')
        enInput.setAttribute('checked', '')
        for(let i=0; i<element.length; i++){
            element[i].classList.toggle('hidden')
        }
    }
}