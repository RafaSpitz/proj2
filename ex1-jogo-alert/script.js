alert('Seja bem-vindo ao nosso jogo!');

// O número secreto é fixo como 5
let numeroSecreto = 5;
let chute;
let tentativas = 1; // Inicia o contador de tentativas

// O loop continua enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {
  chute = parseInt(prompt('Escolha um número entre 1 e 10'));
  
  if (chute == numeroSecreto) {
    // Exibe uma mensagem de sucesso com o número de tentativas
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
  } else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tente novamente.`); // Informa se o chute foi maior
    } else {
        alert(`O número secreto é maior que ${chute}. Tente novamente.`); // Informa se o chute foi menor
    }
  }
  tentativas++; // Incrementa o número de tentativas a cada rodada
}
