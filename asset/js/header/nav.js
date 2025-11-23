import { Utils } from "../utils/utils.js"

const menuIcon = document.querySelector('.menu-icon')
const navList = document.querySelector('nav ul')

const sections = document.querySelectorAll('section')
const navItems = document.querySelectorAll('.nav-item')

export const menuToggle = () => {
    const cross = 'bi-x'
    const list = 'bi-list'

    menuIcon.addEventListener('click', () => {
        if(menuIcon.classList.toggle(list)){
            menuIcon.classList.remove(cross)
        } else {
            menuIcon.classList.add(cross)
        }

        navList.classList.toggle('show')
    })
}

export const sectionToogle = () => {
    let map = new Map()

    for(let i=0; i<sections.length; i++){
        map.set(navItems[i], sections[i])
    }

    for(const [key, value] of map){
        key.addEventListener('click', () => {
            value.classList.toggle('hidden')
            Utils.currentSection.classList.toggle('hidden')
            Utils.currentSection = value
        })
    }
}