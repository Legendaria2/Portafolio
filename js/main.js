function modo() {
    const body = document.querySelector ("#body")
    body.classList.toggle ('dia')
}

const btnModo = document.querySelector ('#btn-modo')
btnModo.addEventListener ('click',modo)