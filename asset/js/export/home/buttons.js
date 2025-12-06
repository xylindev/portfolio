import { goToSection } from "../utils/utils.js"

const btnProjects = document.querySelectorAll('.go-to-projects')
const frProjects = document.querySelector('.projects.fr')
const enProjects = document.querySelector('.projects.en')

export const homeButtonsClick = () => {
    goToSection(btnProjects, frProjects, enProjects)
}