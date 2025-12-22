const settingsSection = document.querySelector('#settings')

export const openSettings = () => {
    const settingsButton = document.querySelector('.settings-btn')

    settingsButton.addEventListener('click', () => {
        settingsSection.classList.toggle('hidden')
    })
}

export const closeSettings = () => {
    const spanBack = document.querySelector('#settings .back')

    spanBack.addEventListener('click', () => {
        settingsSection.classList.toggle('hidden')
    })
}