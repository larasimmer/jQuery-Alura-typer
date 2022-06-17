$(document).ready(function() {

    //VARIÁVEIS

    let frase = $(".frase").text();
    let quantidadeDePalavras = frase.split(" ").length;
    let tamanhoDaFrase = $("#palavras").text(quantidadeDePalavras);
    let campoDeDigitacao = $(".campo-digitacao");
    let tempoRestante = $("#segundos").text();

    //CHAMANDO FUNÇÕES

    campoDeDigitacao.on("input", function() {
        let contadorDeCaracteres = $("#contador-caracteres").text(campoDeDigitacao.val().split("").length);
        let contadorDePalavras = $("#contador-palavras").text(campoDeDigitacao.val().split(/\S+/).length -1);
    });

    campoDeDigitacao.one("focus", function() {
        cronometroId = setInterval(function() {
            tempoRestante--;
            $("#segundos").text(tempoRestante);

            if (tempoRestante == 0) {
                campoDeDigitacao.attr("disabled", "true");
                clearInterval(cronometroId);
            }
        },1000);
    })
});