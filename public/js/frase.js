//VARIÁVEIS

const botaoFrase = $("#botao-frase");

//CHAMANDO FUNÇÕES

botaoFrase.on("click", fraseAleatoria);

//DECLARANDO FUNÇÕES

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoriamente);
}

function trocaFraseAleatoriamente(data) {
    let frase = $(".frase");
    let numeroAleatorio = Math.floor(Math.random() * data.length)
    frase.text(data[numeroAleatorio].texto);
    totalDePalavras();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}