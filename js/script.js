const menu = document.querySelector('.js-menu')

const navegacao = document.querySelectorAll('.menu-nav a')

const menuMobile = document.querySelector('.js-menu-mobile')

const menuBurger = document.querySelector('.js-mobile');

const navMobile = document.querySelector('.nav-mobile');

const btnClose = document.querySelector('.close-button');



//FUNCTIONS
function activeMenu() {
    if (window.pageYOffset > 71) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
}

function scrollToId(e) {
    e.preventDefault()
    let element = e.target;
    let atributo = element.getAttribute('href')
    let secao = document.querySelector(atributo).offsetTop


    window.scroll({
        top: secao - 71,
        behavior: 'smooth'
    })
}

function headerMobile() {
    if (window.pageYOffset > 101) {
        menuMobile.classList.add('active')
    } else {
        menuMobile.classList.remove('active')
    }
}

function openBurger() {
    navMobile.classList.add('active')
    menuBurger.style.display = 'none'
    btnClose.style.display = 'block'
}

function closeBurger() {
    navMobile.classList.remove('active')
    btnClose.style.display = 'none'
    menuBurger.style.display = 'block'
}



//EVENTS
window.addEventListener('scroll', activeMenu)
navegacao.forEach((navItem) => {
    navItem.addEventListener('click', scrollToId)
})

window.addEventListener('scroll', headerMobile)

menuBurger.addEventListener('click', openBurger)

btnClose.addEventListener('click', closeBurger)




window.addEventListener('scroll', () => {
    const text = document.querySelectorAll('.js-anime')
    text.forEach((textItem) => {

        //o getBoundClient pega a posição do elemento na tela, as coordenadas dele(top, left, bottom, right)
        const position = textItem.getBoundingClientRect().top
            //altura da area onde o conteudo é apresentado, no caso, a janela   
        const screenPosition = window.innerHeight;

        if (screenPosition > position) {
            textItem.classList.add('animate')
        }
    })



})