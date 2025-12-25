const navItems = document.querySelectorAll('#discover nav a')
let navItemSelected = document.querySelector('#discover nav .selected')

export const changeNavSelectedByClick = () => {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected')
            navItemSelected.classList.toggle('selected')
            navItemSelected = item
        })
    })
}

export const changeNavSelectedByScroll = () => {
    const portfolio = document.querySelector('#portfolio')

    portfolio.addEventListener('scroll', () => {
        
    })
}