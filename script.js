let vinhos = [];
let estoques = [];
let estados = [];
let safras = [];

let rodando = true;

function validarTexto(texto) {
    return texto !== null && texto.trim() !== "";
}

function validarNumero(numero) {
    return !isNaN(numero) && numero >= 0;
}

function verificarEstoque(qtd) {

    if (qtd === 0) {
        return "ESGOTADO";
    }

    else if (qtd < 5) {
        return "ESTOQUE BAIXO";
    }

    else {
        return "OK";
    }
}

function classificarVinho(estado) {

    switch (estado) {

        case "JOVEM":
            return "Frescor, acidez e aroma intenso";

        case "AMADURECIDO":
            return "Complexo, aromas terciários e equilibrado";

        case "ENVELHECIDO":
            return "Delicado, macio e aromas complexos";

        default:
            return "Estado inválido";
    }
}

function mostrarDados() {

    if (vinhos.length === 0) {
        alert("Nenhum vinho cadastrado.");
        return;
    }

    let relatorio = "----- RELATÓRIO DOS VINHOS -----\n";

    for (let i = 0; i < vinhos.length; i++) {

        relatorio +=
            `${i + 1}. ${vinhos[i]}\n` +
            `Estoque: ${estoques[i]} (${verificarEstoque(estoques[i])})\n` +
            `Estado: ${estados[i]}\n` +
            `Descrição: ${classificarVinho(estados[i])}\n` +
            `Safra: ${safras[i]}\n\n`;
    }

    console.log(relatorio);
    alert(relatorio);
}

function cadastrarVinho() {
    let rodar = true;

    while (rodar) {

        let nome = prompt("Digite o nome do vinho:");

        if (!validarTexto(nome)) {
            alert("Nome inválido.");
            return;
        }

        let qtd = parseInt(
            prompt(`Qual o estoque de ${nome}?`)
        );

        if (!validarNumero(qtd)) {
            alert("Estoque inválido.");
            return;
        }

        let estado = prompt(
            "Digite o estado do vinho (jovem, amadurecido ou envelhecido):"
        );

        if (!validarTexto(estado)) {
            alert("Estado inválido.");
            return;
        }

        estado = estado.trim().toUpperCase();

        let safra = parseInt(
            prompt("Digite a safra do vinho:")
        );

        if (!validarNumero(safra)) {
            alert("Safra inválida.");
            return;
        }

        vinhos.push(nome);
        estoques.push(qtd);
        estados.push(estado);
        safras.push(safra);

        alert(`${nome} cadastrado com sucesso!`);

        continuar = confirm(
            "Deseja cadastrar outro vinho?"
        );
    }
}

function relatorioFinal() {
    let estoqueBaixo = 0;

    let vinhoMaisAntigo = vinhos[0];
    let safraMaisAntiga = safras[0];

    for (let i = 0; i < vinhos.length; i++) {

        if (estoques[i] < 5) {
            estoqueBaixo++;
        }

        if (safras[i] < safraMaisAntiga) {

            safraMaisAntiga = safras[i];
            vinhoMaisAntigo = vinhos[i];
        }
    }

    let resultado =
        "===== RELÁTORIO VINHARIA =====\n" +
        `Quantidade de cadastros: ${vinhos.length}\n` +
        `Vinhos com estoque baixo: ${estoqueBaixo}\n` +
        `Vinho mais antigo: ${vinhoMaisAntigo} (${safraMaisAntiga})`;

    console.log(resultado);
    alert(resultado);
}

function menu() {
    return prompt(
        "===== MENU =====\n" +
        "1 - Cadastrar vinho\n" +
        "2 - Mostrar dados\n" +
        "3 - Sair\n\n" +
        "Escolha uma opção:"
    );
}

function main() { // sistema
    while (rodando) {

        let opcao = menu();

        switch (opcao) {

            case "1":
                cadastrarVinho();
                break;

            case "2":
                mostrarDados();
                break;

            case "3":

                relatorioFinal();

                alert("Sistema encerrado.");

                rodando = false;
                break;

            default:
                alert("Opção inválida.");
        }
    }
}

main(); // O relátorio da quantidade de cadastros e a comparação da safra é mostrado ao encerrar o programa e no consolelog