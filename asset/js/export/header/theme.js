const body = document.querySelector('body')
const header = document.querySelector('header')
const home = document.querySelectorAll('.home')
const about = document.querySelectorAll('.about')

const themeIcon = document.querySelector('.theme-icon')

export const applyTheme = () => {
    const moon = 'bi-moon-fill'
    const sun = 'bi-sun-fill'

    function themeToggle() {
        const elements = [
            body,
            header,
            ...home,
            ...about
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