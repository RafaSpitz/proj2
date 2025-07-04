// Adiciona um listener para o evento de 'submit' do formulário
document.getElementById("formulario").addEventListener("submit", function (e) {
  // Impede o comportamento padrão de recarregamento da página
  e.preventDefault();

  // Coleta os valores dos 5 campos de input
  const valores = [];
  for (let i = 1; i <= 5; i++) {
    const valor = document.getElementById(`valor${i}`).value.trim();
    // Verifica se algum campo está vazio
    if (valor === "") {
      alert(`O campo Valor ${i} está vazio.`);
      return;
    }
    valores.push(valor);
  }

  // Cria o conteúdo do arquivo de texto, unindo os valores com quebras de linha
  const conteudo = valores.map((v, i) => `Valor ${i + 1}: ${v}`).join("\n");

  // Cria um objeto Blob (arquivo em memória)
  const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
  // Cria um link para download
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "valores.txt";
  // Simula o clique no link para iniciar o download
  link.click();
});
