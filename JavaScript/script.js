// Selecionando as caixas
const caixas = document.querySelectorAll(".caixa");


// Selecionando os botões
const botaoPrincipal = document.getElementById("botaoPrincipal");
const botaoSecundario = document.getElementById("botaoSecundario");


// CLICAR EM CADA CAIXA: BORDA VERDE
caixas.forEach((caixa) => {
    caixa.addEventListener("click", () => {
        caixa.style.border = "2px solid yellow";
    });
});


// BOTÃO SECUNDÁRIO: REMOVER TODAS AS BORDAS
botaoSecundario.addEventListener("click", () => {
    caixas.forEach((caixa) => {
        caixa.style.border = "none";
    });
});


// BOTÃO PRINCIPAL: BORDA AZUL EM TODAS AS CAIXAS
botaoPrincipal.addEventListener("click", () => {
    caixas.forEach((caixa) => {
        caixa.style.border = "2px solid green";
    });
});