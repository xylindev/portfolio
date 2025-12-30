const navItems = document.querySelectorAll('#discover nav a')
let navItemSelected = document.querySelector('#discover nav .selected')

const navItemsMap = createNavItemsMap()

const selected = 'selected'
let eventIsClick = false
let idx = 0

function createNavItemsMap() {
    const navItemsMap = new Map()
    
    for(let i=0; i<navItems.length; i++)
        navItemsMap.set(navItems[i], i)

    return navItemsMap
}

export const changeNavSelectedByClick = () => {
    for(const [navItem, index] of navItemsMap) {
        navItem.addEventListener('click', () => {
            navItem.classList.toggle(selected)
            navItemSelected.classList.toggle(selected)
            navItemSelected = navItem
            idx = index
            eventIsClick = true
        })
    }
}

export const changeNavSelectedByScroll = () => {
    const portfolio = document.querySelector('#portfolio')
    const portfolioSection = document.querySelectorAll('#portfolio > section')
    const bodyHeigth = document.body.getBoundingClientRect().height

    let previousSection = portfolioSection[idx]
    let nextSection = portfolioSection[idx+1]

    portfolio.addEventListener('scroll', () => {
        let previousSectionBottom = previousSection.getBoundingClientRect().bottom
        let nextSectionTop = nextSection.getBoundingClientRect().top

        if
        (
            !eventIsClick && 
            idx < (navItems.length-1) && 
            nextSectionTop < bodyHeigth
        ) idx++

        if
        (
            !eventIsClick && 
            idx > 0 && 
            previousSectionBottom > bodyHeigth
        ) idx--

        previousSection = (idx-1 >= 0) ? portfolioSection[idx-1] : portfolioSection[0]
        nextSection = (idx+1 <= 5) ? portfolioSection[idx+1] : portfolioSection[5]

        navItems[idx].classList.toggle(selected)
        navItemSelected.classList.toggle(selected)
        navItemSelected = navItems[idx]

        eventIsClick = false
    })
}