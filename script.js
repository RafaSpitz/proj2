function iniciarJogoAlert() {
    alert('Iniciando o Jogo do Número Secreto!');
    const numeroSecreto = 5;
    let chute;
    let tentativas = 1;
    while (chute != numeroSecreto) {
        chute = prompt('Escolha um número entre 1 e 10');
        if (chute == numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}. Tente novamente.`);
            } else {
                alert(`O número secreto é maior que ${chute}. Tente novamente.`);
            }
        }
        tentativas++;
    }
}

function executarFormulario() {
    alert('Executando a função do formulário para gerar o arquivo TXT.');
    const valores = [];
    for (let i = 1; i <= 5; i++) {
        const inputElement = document.querySelector(`#valor${i}`);
        const valor = inputElement.value.trim();
        if (valor === "") {
            alert(`O campo Valor ${i} está vazio. Por favor, preencha todos os campos.`);
            return;
        }
        valores.push(valor);
    }
    const conteudo = valores.map((v, i) => `Valor ${i + 1}: ${v}`).join("\n");
    const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "valores.txt";
    link.click();
}

function iniciarJogoDaMedia() {
    alert("Bem-vindo ao Jogo da Média!");
    let quantidade = prompt("Quantos números você quer calcular a média?");
    quantidade = Number(quantidade);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Quantidade inválida. Tente novamente com um número maior que zero.");
    } else {
        let soma = 0;
        for (let i = 1; i <= quantidade; i++) {
            let entrada = prompt(`Digite o ${i}º número:`);
            let numero = Number(entrada);
            if (entrada === null || entrada.trim() === "" || isNaN(numero)) {
                alert("Valor inválido. Por favor, digite um número.");
                i--;
                continue;
            }
            soma += numero;
        }
        let media = soma / quantidade;
        alert(`A média dos ${quantidade} números digitados é: ${media.toFixed(2)}`);
    }
}
