const fr = document.querySelector('#fr')
const en = document.querySelector('#en')

const flags = document.querySelectorAll('.flag-icon')
const themes = document.querySelectorAll('.theme')

const body = document.querySelector('body')
const headers = document.querySelectorAll('header')
const buttons = document.querySelectorAll('button')
const icons = document.querySelectorAll('main i')
const homeButton = document.querySelector('.button')

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

let switchTheme = () => {
    const allElement = [
        body, 
        ...headers, 
        ...buttons, 
        ...icons, 
        homeButton
    ]

    allElement.forEach(value => {
        value.classList.toggle('darkMode')
    })
}

let applyTheme = () => {
    const sun = 'bi-sun-fill'
    const moon = 'bi-moon-fill'

    function syncIcon(i, isDarkMode){
        if(isDarkMode){
            themes[i].classList.add(moon)
            themes[i].classList.remove(sun)
        } else {
            themes[i].classList.add(sun)
            themes[i].classList.remove(moon)
        }
    }

    themes[0].addEventListener('click', () => {
        if(themes[0].classList.toggle(sun)){
            themes[0].classList.remove(moon)
        } else {
            themes[0].classList.add(moon)
        }
        switchTheme()
        syncIcon(1, body.classList.contains('darkMode'))
    })

    themes[1].addEventListener('click', () => {
        if(themes[1].classList.toggle(sun)){
            themes[1].classList.remove(moon)
        } else {
            themes[1].classList.add(moon)
        }
        switchTheme()
        syncIcon(0, body.classList.contains('darkMode'))
    })
}

export let header = () => {
    switchLanguage()
    applyTheme()
}