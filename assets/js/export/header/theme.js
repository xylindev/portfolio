const body = document.querySelector('body')
const themeIcon = document.querySelector('.theme-icon')

export const applyTheme = () => {
    const moon = 'bi-moon-fill'
    const sun = 'bi-sun-fill'

    themeIcon.addEventListener('click', () => {
        if(themeIcon.classList.toggle(sun)){
            themeIcon.classList.remove(moon)
        } else {
            themeIcon.classList.add(moon)
        }

        body.classList.toggle('darkMode')
    })
}