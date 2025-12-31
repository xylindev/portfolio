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
        navItem.addEventListener('click', (e) => {
            e.preventDefault();

            navItem.classList.toggle(selected)
            navItemSelected.classList.toggle(selected)
            navItemSelected = navItem
            idx = index
            eventIsClick = true

            const targetId = navItem.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const portfolio = document.querySelector('#portfolio');

            if (targetSection && portfolio) {
                portfolio.scrollTo({
                    top: targetSection.offsetTop,
                });
            }
        })
    }
}

export const changeNavSelectedByScroll = () => {
    const portfolio = document.querySelector('#portfolio')
    const portfolioSection = document.querySelectorAll('#portfolio > section .content')
    const body = document.body
    const nav = document.querySelector('#discover > nav')

    let previousSection = portfolioSection[idx]
    let nextSection = portfolioSection[idx+1]

    portfolio.addEventListener('scroll', () => {
        let nextSectionTop = nextSection.getBoundingClientRect().top
        let previousSectionTop = previousSection.getBoundingClientRect().top

        const bodyHeigth = body.getBoundingClientRect().height
        const navBottom = nav.getBoundingClientRect().bottom

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
            previousSectionTop > navBottom
        ) idx--

        previousSection = (idx-1 >= 0) ? portfolioSection[idx-1] : portfolioSection[0]
        nextSection = (idx+1 <= 5) ? portfolioSection[idx+1] : portfolioSection[5]

        navItems[idx].classList.toggle(selected)
        navItemSelected.classList.toggle(selected)
        navItemSelected = navItems[idx]

        eventIsClick = false
    })
}