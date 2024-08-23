
// Função para gerar o número
function generateNumber() {
    const min = Math.ceil(document.getElementById("min-number").value);
    const max = Math.floor(document.getElementById("max-number").value);
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Atualiza o conteúdo do h1 com uma animação
    const h1 = document.querySelector("h1");
    h1.style.opacity = 0; // Inicia com opacidade 0
    setTimeout(() => {
        h1.textContent = `Número sorteado: ${result}`;
        h1.style.opacity = 1; // Anima para opacidade 1
    }, 500);  // Tempo da transição (meio segundo)
}

// Adiciona o event listener aos inputs para validar conforme o usuário digita
document.getElementById("min-number").addEventListener("input", validateInputs);
document.getElementById("max-number").addEventListener("input", validateInputs);
