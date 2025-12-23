export const reloadParagraph = () => {
    const frParagraph = document.querySelector('.splash-text .fr')
    const enParagraph = document.querySelector('.splash-text .en')

    const lengthTables = 3

    const frSplashTxts = [
        'Développeur Web Full Stack',
        'Étudiant à l\'IUT de Lille',
        'Recrutez-moi'
    ]

    const enSplashTxts = [
        'Full-stack Web Developer',
        'Student at the IUT of Lille',
        'Hire me'
    ]

    const chosenIdx = Math.round(Math.random() * lengthTables)
    const idx = (chosenIdx !== lengthTables) ? chosenIdx : 0
    
    frParagraph.innerHTML = frSplashTxts[idx]
    enParagraph.innerHTML = enSplashTxts[idx]
}