let navItemSelected = document.querySelector('#projects .nav-item.selected')
let sectionVisible = document.querySelector('#projects .projects-card > section:not(hidden)')

const selected = 'selected'
const hidden = 'hidden'

function createProjectsMap() {
    const projectSection = document.querySelectorAll('#projects .projects-card > section')
    const navItems = document.querySelectorAll('#projects .nav-item')
    const nbProjects = projectSection.length
    
    const map = new Map()
    
    for(let idx = 0; idx < nbProjects; idx++)
        map.set(navItems[idx], projectSection[idx])
    
    return map
}

export const sectionProjectsToggle = () => {
    const projectMap = createProjectsMap()

    for(const [navItem, section] of projectMap) {
        navItem.addEventListener('click', () => {
            navItem.classList.toggle(selected)
            navItemSelected.classList.toggle(selected)

            section.classList.toggle(hidden)
            sectionVisible.classList.toggle(hidden)

            navItemSelected = navItem
            sectionVisible = section
        })
    }
}