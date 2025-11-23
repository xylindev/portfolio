const body = document.querySelector('body')
const headers = document.querySelector('header')
const buttons = document.querySelectorAll('button')
const icons = document.querySelectorAll('main i')
const homeButton = document.querySelector('.button')
const navList = document.querySelector('nav ul')

const themeIcon = document.querySelector('.theme-icon')

export const applyTheme = () => {
    const moon = 'bi-moon-fill'
    const sun = 'bi-sun-fill'

    function themeToggle() {
        const elements = [
            body, 
            headers, 
            navList,
            homeButton,
            ...buttons,
            ...icons,
        ]

        elements.forEach(value => {
            value.classList.toggle('darkMode')
        })
    }

    themeIcon.addEventListener('click', () => {
        if(themeIcon.classList.toggle(sun)){
            themeIcon.classList.remove(moon)
        } else {
            themeIcon.classList.add(moon)
        }

        themeToggle()
    })
}