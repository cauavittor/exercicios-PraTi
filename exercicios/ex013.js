import PromptSync from "prompt-sync";
const prompt = PromptSync();

function exercicio() {
  console.log("Exercício 13 - Média Aritmética");
  console.log("\n");
}

function app() {
  exercicio();

  let soma = 0;
  let i = 0;

  while (true) {
    let numeroInput = Number(prompt("Digite um número (0 para sair): "));

    if (isNaN(numeroInput)) {
      console.log("A entrada de dados não foi um número. Tente novamente.");
      continue;
    }

    if (numeroInput === 0) {
      break; // sai do loop antes de somar o 0
    }

    soma += numeroInput;
    i++;
  }

  if (i > 0) {
    let calculo = soma / i;
    console.log(`A média aritmética é: ${calculo}`);
  } else {
    console.log("Nenhum número válido foi inserido.");
  }
}

app();
