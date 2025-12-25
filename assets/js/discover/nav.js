let navItemSelected = document.querySelector('#portfolio .selected')
let currentSection = document.querySelector('#portfolio #introduction')

function createMapSection(navItems, sections) {
    const sectionMap = new Map()

    for(let i=0; i<6; i++)
        sectionMap.set(navItems[i], sections[i])
    
    return sectionMap
}

export const changeSection = () => {
    const navItems = [...document.querySelectorAll('#portfolio > nav li')]
    const sections = [...document.querySelectorAll('#portfolio > section')]
    let sectionMap = createMapSection(navItems, sections)

    for(const [key, value] of sectionMap) {
        key.addEventListener('click', () => {
            key.classList.toggle('selected')
            navItemSelected.classList.toggle('selected')
            value.classList.toggle('hidden')
            currentSection.classList.toggle('hidden')
            navItemSelected = key
            currentSection = value
        })
    }
}