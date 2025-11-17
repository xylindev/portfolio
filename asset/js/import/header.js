const flags = document.querySelectorAll('.flag-icon')
const fr = document.querySelector('#fr')
const en = document.querySelector('#en')

let switchLanguage = () => {
    flags[0].addEventListener('click', () => {
        fr.classList.add('hidden')
        en.classList.remove('hidden')
    })
    
    flags[1].addEventListener('click', () => {
        en.classList.add('hidden')
        fr.classList.remove('hidden')
    })
}


export let header = () => {
    switchLanguage()
}