let vinhos = [];
let estoques = [];
let estados = [];

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
let rodando = true;
while (rodando) {
    let opcao = menu();
    switch (opcao) {
        case '1':
            let nome = prompt('Digite o nome do vinho:');
            if (nome === null) break;

            let qtd = parseInt(prompt(`Qual o estoque de ${nome}?`));
            let etd = prompt(`Qual o estado de ${nome} (jovem, amadurecido ou antigo)?`).trim().toUpperCase();
            
            vinhos.push(nome);
            estoques.push(qtd);
            estados.push(etd);

            alert(`${nome} cadastrado com ${qtd} unidades e ${etd}. Detalhamento no console`);
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

            alert(classificacao);
            break
            case '3':
                if (vinhos.length === 0){
                    alert("Sem estados cadastrados!")
                }
                
                let classestado = "---Estado Dos Vinhos---\n"
                
                for (let i = 0; i < vinhos.length; i++){
                    let status = "";
                    
                    if (estados[i]===0){
                        desc="Nenhum estado cadastrado"
                    } else if (estados[i] =='JOVEM'){
                        desc = "Frescor, acidez e aroma intenso"
                    } else if (estados[i] == 'AMADURECIDO'){
                        desc = "Complexo, aromas terceários e equilibrado."
                    }  else if (estados[i] == 'ENVELHECIDO'){
                        desc="Delicado, macio, claro com aromas complexos"
                    }else{
                        desc="Estado inválido"
                    }
                    classestado += `${i + 1}. ${vinhos[i]}: ${desc}\n`
                }
                
                alert(classestado)
                break
            case '4':
                alert("Encerrando o programa...");
                rodando = false;
                break;
            default:
                alert("Opção inválida")
                break
            }
    if (vinhos.length > 0 && rodando){
        let relatorioo = "---Relatório de Atualização---\n";
        for (let i=0;i<vinhos.length; i++){
            relatorioo+= `${vinhos[i]}: ${estoques[i]} un | ${estados[i]}\n`;
        }
        console.log(relatorioo);
        
    }
}