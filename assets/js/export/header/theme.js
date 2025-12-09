const body = document.querySelector('body')
const themeIcon = document.querySelector('.theme-icon')

const moon = 'bi-moon-fill'
const sun = 'bi-sun-fill'

export const applyTheme = () => {
    themeIcon.addEventListener('click', () => {
        if(themeIcon.classList.toggle(sun)){
            themeIcon.classList.remove(moon)
            localStorage.setItem('theme', 'light')
        } else {
            themeIcon.classList.add(moon)
            localStorage.setItem('theme', 'dark')
        }
        body.classList.toggle('darkMode')
    })
}

export const loadTheme = () => {
    if(localStorage.getItem('theme') === 'dark'){
        body.classList.toggle('darkMode')
        themeIcon.classList.remove(sun)
        themeIcon.classList.add(moon)
    }
}