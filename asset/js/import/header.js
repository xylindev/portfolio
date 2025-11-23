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

let themeToggle = () => {
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

let syncElement = (items, elements, condition) => {
    elements.forEach(element => {
        if(condition){
            element.classList.add(items[0])
            element.classList.remove(items[1])
        } else {
            element.classList.add(items[1])
            element.classList.remove(items[0])
        }
    })
}

let getSections = () => {
    let sections = []
    let sectionsName = document.querySelectorAll('.section-name')
    let allSections = document.querySelectorAll('section')

    for(let i=0; i<sectionsName.length/2; i++){
        sections.push([[sectionsName[i], sectionsName[i+6]], [allSections[i], allSections[i+6]]])
    }

    return sections
}

// -----------------------------------------------------------------------------------------

let languageToggle = () => {
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
    const moon = 'bi-moon-fill'
    const sun = 'bi-sun-fill'

    themes.forEach(theme => {
        theme.addEventListener('click', () => {
            themeToggle()
            syncElement([moon, sun], themes, body.classList.contains('darkMode'))
        })
    })
}

let navMenu = () => {
    const cross = 'bi-x'
    const list = 'bi-list'

    function showNavMobile(){
        navList[0].classList.toggle('show')
        navList[1].classList.toggle('show')
    }

    menuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            showNavMobile()
            syncElement([cross, list], menuIcons, navList[0].classList.contains('show'))
        })
    })
}

let sectionToggle = () => {
    let elements = new Map(getSections())
    let currentSections = document.querySelectorAll('.home')
    
    function syncSection(values, currentSections, condition){
        values.forEach(value => {
            if(condition){
                value.classList.remove('hidden')
                currentSections.forEach(section => {
                    section.classList.add('hidden')
                })
            }
        })
    }

    function isHidden(values){
        let isHidden = false
        values.forEach(value => {
            isHidden = value.classList.contains('hidden')
        })
        return isHidden
    }

    for(const [keys, values] of elements){
        keys.forEach(key => {
            key.addEventListener('click', () => {
                syncSection(values, currentSections, isHidden(values))
                currentSections = values
            })
        })
    }
}

// -----------------------------------------------------------------------------------------

export let header = () => {
    languageToggle()
    applyTheme()
    navMenu()
    sectionToggle()
}