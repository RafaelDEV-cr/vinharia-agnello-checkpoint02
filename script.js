let vinhos = [];
let estoques = [];

function menu() {
    let textomenu = `
---------- Menu ----------
1 - Cadastrar Vinho e Estoque
2 - Estoque/Status
3 - Estado do Vinho
4 - Sair
--------------------------`;
    return prompt(textomenu + '\nQual opção deseja selecionar?');
}

while (true) {
    let opcao = menu();

    if (opcao === '4' || opcao === null) {
        break;
    }

    switch (opcao) {
        case '1':
            let nome = prompt('Digite o nome do vinho:');
            if (nome === null) break;

            let qtd = parseInt(prompt(`Qual o estoque de ${nome}?`));
            
            vinhos.push(nome);
            estoques.push(qtd);

            alert(`${nome} cadastrado com ${qtd} unidades. Detalhamento no console`);
            break;

        case '2':
            if (vinhos.length === 0) {
                alert("Nenhum vinho cadastrado.");
                break;
            }

            let classificacao = "--- Estado dos Vinhos ---\n";

            for (let i = 0; i < vinhos.length; i++) {
                let status = "";

                if (estoques[i] === 0) {
                    status = "ESGOTADO";
                } else if (estoques[i] < 5) {
                    status = "ESTOQUE BAIXO";
                } else {
                    status = "OK";
                }

                classificacao += `${i + 1}. ${vinhos[i]}: ${status} (${estoques[i]} un) (MAIS INFORMAÇÕES NO CONSOLE)\n`;
            }

            let relatorioo = "--- Estoque Atual ---\n" // relátorio de estoque
            for (let i = 0; i < vinhos.length; i++) {
                relatorioo += (`${vinhos[i]}: ${estoques[i]} unidades\n`);
            }
            alert(classificacao);
            console.log(relatorioo);
            break;

        default:
            alert("Opção inválida!");
            break;
    }
}