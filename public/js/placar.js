//DECLARANDO FUNÇÕES

function inserePlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let usuario = "Lara";
    let palavrasDigitadas = $("#contador-palavras").text();

    let linhaTabela = novaLinha(usuario, palavrasDigitadas);
    linhaTabela.find(".botao-remover").click(removeLinha);
    
    corpoTabela.prepend(linhaTabela);
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
    $(this).parent().parent().remove();
}