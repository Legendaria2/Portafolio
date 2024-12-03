AOS.init();

function modo() {
    const body = document.querySelector ("#body")
    body.classList.toggle ('dia')
    const nombre =document.querySelector (".nombre")
}

const btnModo = document.querySelector ('#btn-modo')
btnModo.addEventListener ('click',modo)