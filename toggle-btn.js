const burger = document.querySelector('.burger')
const navigationItems = document.querySelector('.navigation-items')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navigationItems.classList.toggle('active')
})