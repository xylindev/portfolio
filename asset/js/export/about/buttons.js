import { goToSection } from "../utils/utils.js"

const btnEducation = document.querySelectorAll('.go-to-education')
const btnSkills = document.querySelectorAll('.go-to-skills')

const frEducation = document.querySelector('.education.fr')
const frSkills = document.querySelector('.skills.fr')

const enEducation = document.querySelector('.education.en')
const enSkills = document.querySelector('.skills.en')

export const aboutButtonsClick = () => {
    goToSection(btnEducation, frEducation, enEducation)
    goToSection(btnSkills, frSkills, enSkills)
}