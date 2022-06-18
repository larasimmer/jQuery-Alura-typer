    //VARIÁVEIS

    let frase = $(".frase").text();
    let quantidadeDePalavras = frase.split(" ").length;
    let tamanhoDaFrase = $("#palavras").text(quantidadeDePalavras);
    let campoDeDigitacao = $(".campo-digitacao");
    let tempoInicial = $("#segundos").text();
    let botaoReiniciar = $("#botao-reiniciar");

    //CHAMANDO FUNÇÕES

    $(document).ready(function() {
    iniciaContadores();
    iniciaCronometro();
    reiniciaJogo();
}); 

    //DECLARANDO FUNÇÕES

    function iniciaContadores() {
        campoDeDigitacao.on("input", function() {
            let contadorDeCaracteres = $("#contador-caracteres").text(campoDeDigitacao.val().split("").length);
            let contadorDePalavras = $("#contador-palavras").text(campoDeDigitacao.val().split(/\S+/).length -1);
        });
    }

    function iniciaCronometro() {
        let tempoRestante = $("#segundos").text();
        campoDeDigitacao.one("focus", function() {
            botaoReiniciar.attr("disabled", true);
            cronometroId = setInterval(function() {
                tempoRestante--;
                $("#segundos").text(tempoRestante);
    
                if (tempoRestante == 0) {
                    campoDeDigitacao.attr("disabled", true);
                    clearInterval(cronometroId);
                    botaoReiniciar.attr("disabled", false);
                    campoDeDigitacao.toggleClass("campo-desabilitado");
                }
            },1000);
        });
    }

    function reiniciaJogo() {
        botaoReiniciar.click(function() {
            campoDeDigitacao.attr("disabled", false);
            campoDeDigitacao.val("");
            contadorDeCaracteres = $("#contador-caracteres").text("0");
            contadorDePalavras = $("#contador-palavras").text("0");
            $("#segundos").text(tempoInicial);
            iniciaCronometro();
            campoDeDigitacao.toggleClass("campo-desabilitado");
        });
    }

    //function comparaFrases() {
        //campoDeDigitacao,on("input", function() {

        //})
    //}

