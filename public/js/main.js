    //VARIÁVEIS

    const campoDeDigitacao = $(".campo-digitacao");
    let tempoInicial = $("#segundos").text();
    const botaoReiniciar = $("#botao-reiniciar");


    //CHAMANDO FUNÇÕES

    $(document).ready(function() {
    totalDePalavras();
    iniciaContadores();
    iniciaCronometro();
    reiniciaJogo();
    comparaFrases();

}); 

    //DECLARANDO FUNÇÕES

    function totalDePalavras() {
        let frase = $(".frase").text();
        let quantidadeDePalavras = frase.split(" ").length;
        let tamanhoDaFrase = $("#palavras").text(quantidadeDePalavras);
    }
    
    function iniciaContadores() {
        campoDeDigitacao.on("input", function() {
            let contadorDeCaracteres = $("#contador-caracteres").text(campoDeDigitacao.val().split("").length);
            let contadorDePalavras = $("#contador-palavras").text(campoDeDigitacao.val().split(/\S+/).length -1);
        });
    }

    function iniciaCronometro() {
        campoDeDigitacao.one("focus", function() {
            let tempoRestante = $("#segundos").text();
            botaoReiniciar.attr("disabled", true);
            cronometroId = setInterval(function() {
                tempoRestante--;
                $("#segundos").text(tempoRestante);
    
                if (tempoRestante == 0) {
                    campoDeDigitacao.attr("disabled", true);
                    clearInterval(cronometroId);
                    botaoReiniciar.attr("disabled", false);
                    campoDeDigitacao.toggleClass("campo-desabilitado");
                    inserePlacar();
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
            campoDeDigitacao.removeClass("digitacao-correta");
            campoDeDigitacao.removeClass("digitacao-errada");
        });
    }

    function comparaFrases() {
        campoDeDigitacao.on("input", function() {
            let frase = $(".frase").text();
            let digitado = campoDeDigitacao.val();
            let comparavel = frase.substr(0, digitado.length);

            if (digitado == comparavel) {
                campoDeDigitacao.addClass("digitacao-correta");
                campoDeDigitacao.removeClass("digitacao-errada");

            } else {
                campoDeDigitacao.addClass("digitacao-errada");
                campoDeDigitacao.removeClass("digitacao-correta");
            }
        });
    }

    function atualizaTempoInicial(tempo) {
        tempoInicial = tempo;
        $("#segundos").text(tempo);
    }

    

