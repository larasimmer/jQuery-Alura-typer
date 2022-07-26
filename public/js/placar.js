//VARIÁVEIS

const botaoPlacar = $("#botao-placar");
const placar = $(".placar");

//CHAMANDO FUNÇÕES

mostraPlacar();

//DECLARANDO FUNÇÕES

function inserePlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let usuario = "Lara";
    let palavrasDigitadas = $("#contador-palavras").text();

    let linhaTabela = novaLinha(usuario, palavrasDigitadas);
    linhaTabela.find(".botao-remover").click(removeLinha);
    
    corpoTabela.prepend(linhaTabela);
    placar.slideDown(500);
    scrollPlacar();
}

function novaLinha(usuario, palavras) {
    let linha = $("<tr>");
    let colunaUsuario = $("<td>").text(usuario);
    let colunaPalavras = $("<td>").text(palavras);
    let colunaRemover = $("<td>");
    let link = $("<a>").addClass("botao-remover").attr("href", "#");
    let icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();
    let linha = $(this).parent().parent();
    linha.fadeOut(1000);

    setTimeout(function() {
        linha.remove();
    }, 1000);
}

function mostraPlacar() {
    botaoPlacar.on("click", function() {
        placar.stop().slideToggle(600);
    });
}

function scrollPlacar() {
    let posicaoPlacar = placar.offset().top;
    $("html, body").animate({
        scrollTop: posicaoPlacar
    },1000);
}