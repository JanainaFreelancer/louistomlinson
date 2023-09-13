const navegacao = document.querySelectorAll('.menu-nav a')







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