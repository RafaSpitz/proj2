function numeroSecreto() {
    let numeroSecreto = 5;
    console.log(numeroSecreto);

    let chute;
    let tentativas = 0;

    while (chute != numeroSecreto) {
        chute = parseInt(prompt('Escolha um número entre 1 e 10'));
        tentativas++;

        if (chute == numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
        } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}. Tente novamente.`);
        } else {
            alert(`O número secreto é maior que ${chute}. Tente novamente.`);
        }
    }
}

function jogoMedia() {
    let quantidade = prompt("Quantos números você quer digitar?");
    quantidade = Number(quantidade);

    if (quantidade <= 0 || quantidade === null || quantidade === "" || typeof quantidade !== "number") {
        alert("Quantidade inválida. Tente novamente com um número maior que zero.");
    } else {
        let soma = 0;

        for (let i = 1; i <= quantidade; i++) {
            let entrada = prompt(`Digite o ${i}º número:`);
            let numero = Number(entrada);

            if (entrada.trim() === "" || entrada === null || isNaN(numero)) {
                alert("Valor inválido. Digite um número.");
                i--;
                continue;
            }

            soma += numero;
        }

        let media = soma / quantidade;

        alert(`A média calculada entre os ${quantidade} números digitados é: ${media.toFixed(2)}`);
    }
}

function jogoSoma() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    let resultado = num1 + num2;
    alert("A soma dos números é: " + resultado);
}
