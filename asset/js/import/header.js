const fr = document.querySelector('#fr')
const en = document.querySelector('#en')

const flags = document.querySelectorAll('.flag-icon')
const themes = document.querySelectorAll('.theme')

const body = document.querySelector('body')
const headers = document.querySelectorAll('header')
const buttons = document.querySelectorAll('button')
const icons = document.querySelectorAll('main i')
const homeButton = document.querySelector('.button')
const navList = document.querySelectorAll('nav ul')

const menuIcons = document.querySelectorAll('.menu-icon')

// -----------------------------------------------------------------------------------------

let switchTheme = () => {
    const allElement = [
        body, 
        ...headers, 
        ...buttons, 
        ...icons, 
        ...navList,
        homeButton
    ]
    
    allElement.forEach(value => {
        value.classList.toggle('darkMode')
    })
}

let showNavMobile = () => {
    navList[0].classList.toggle('show')
    navList[1].classList.toggle('show')
}

let syncThemeIcon = (i, condition) => {
    const sun = 'bi-sun-fill'
    const moon = 'bi-moon-fill'

    if(condition){
        themes[i].classList.add(moon)
        themes[i].classList.remove(sun)
    } else {
        themes[i].classList.add(sun)
        themes[i].classList.remove(moon)
    }
}

let syncNavIcon = () => {
    const list = 'bi-list'
    const cross = 'bi-x'

    menuIcons.forEach(icon => {
        if(navList[0].classList.contains('show')){
            icon.classList.add(cross)
            icon.classList.remove(list)
        } else {
            icon.classList.add(list)
            icon.classList.remove(cross)
        }
    })
}

// -----------------------------------------------------------------------------------------

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

let applyTheme = () => {
    themes.forEach(theme => {
        theme.addEventListener('click', () => {
            switchTheme()
            syncThemeIcon(0, body.classList.contains('darkMode'))
            syncThemeIcon(1, body.classList.contains('darkMode'))
        })
    })
}

let navMenu = () => {
    menuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            showNavMobile()
            syncNavIcon()
        })
    })
}

// -----------------------------------------------------------------------------------------

export let header = () => {
    switchLanguage()
    applyTheme()
    navMenu()
}