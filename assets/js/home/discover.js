const discoverSection = document.querySelector('#discover')
const homeSection = document.querySelector('#home')
const footer = document.querySelector('footer')

export const openDiscover = () => {
    const discoverButton = document.querySelector('.discover-btn')

    discoverButton.addEventListener('click', () => {
        discoverSection.classList.toggle('hidden')
        homeSection.classList.toggle('hidden')
        footer.classList.toggle('hidden')
    })
}

export const closeDiscover = () => {
    const back = document.querySelector('#discover .back')

    back.addEventListener('click', () => {
        discoverSection.classList.toggle('hidden')
        homeSection.classList.toggle('hidden')
        footer.classList.toggle('hidden')
    })
}