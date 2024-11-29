

function ocultar() {
    const footer = document.querySelector ('#desplegable')
    footer.classList.toggle ('fixed-bottom')
}

const bnFotter = document.querySelector ("#bn-footer")
bnFotter.addEventListener ('click',ocultar)

function modo() {
    const body = document.querySelector ("#body")
    body.classList.toggle ('dia')
}

const btnModo = document.querySelector ('#btn-modo')
btnModo.addEventListener ('click',modo)