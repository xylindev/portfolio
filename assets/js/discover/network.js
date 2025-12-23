const networks = document.querySelector('.networks')

export const openNetworks = () => {
    const networkButton = document.querySelector('.networks-btn')

    networkButton.addEventListener('click', () => {
        networks.classList.toggle('hidden')
    })
}

export const closeNetworks = () => {
    const closeButton = document.querySelector('.networks .close-btn')

    closeButton.addEventListener('click', () => {
        networks.classList.toggle('hidden')
    })
}