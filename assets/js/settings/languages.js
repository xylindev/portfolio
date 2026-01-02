const frInput = document.querySelector('#français')
const enInput = document.querySelector('#anglais')

const elements = [
    ...document.querySelectorAll('.fr'),
    ...document.querySelectorAll('.en')
]

export const languagesToggle = () => {
    frInput.addEventListener('click', () => {
        let language = localStorage.getItem('language')

        if(language === 'en')
            elements.forEach(element => {
                element.classList.toggle('hidden')
            })

        localStorage.setItem('language', 'fr')
    })

    enInput.addEventListener('click', () => {
        let language = localStorage.getItem('language')

        if(language === 'fr' || language === null)
            elements.forEach(element => {
                element.classList.toggle('hidden')
            })

        localStorage.setItem('language', 'en')
    })
}

export const checkLanguages = () => {
    const language = localStorage.getItem('language')

    if(language === 'en'){
        frInput.attributes.removeNamedItem('checked')
        enInput.setAttribute('checked', '')
        
        elements.forEach(element => {
            element.classList.toggle('hidden')
        })
    }
}