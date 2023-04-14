const controle =  document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5   
    },

    "blindagem": {
        "forca": 42,
        "poder": 20,
        "energia": -21,
        "velocidade": -50   
    },

    "nucleos": {
        "forca": 30,
        "poder": 35,
        "energia": 50,
        "velocidade": 10   
    },

    "pernas": {
        "forca": 21,
        "poder": 30,
        "energia": 21,
        "velocidade": 45   
    },

    "foguetes": {
        "forca": 25,
        "poder": 50,
        "energia": -25,
        "velocidade": 10   
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    }) 
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
