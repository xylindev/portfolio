const navItems = document.querySelectorAll('#portfolio > nav li ')
let currentSection = document.querySelector('#portfolio .selected')

export const changeSection = () => {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected')
            currentSection.classList.toggle('selected')
            currentSection = item
        })
    })
}