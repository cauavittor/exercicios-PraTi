import PromptSync from "prompt-sync";
const prompt = PromptSync()


function exercicio(){
 console.log("Exercicio 12 - Tabuada")
 console.log("\n")
}

function app(){
 exercicio()

 let numeroCalculado = parseInt(prompt("Digite um numero para descobrir sua tabuada: "))
 let multiplicacao = 0
 for(let i = 0; i < 11; i++){
  multiplicacao = numeroCalculado * i
  console.log(`${numeroCalculado} X ${i} = ${multiplicacao}`)
 }
}
app()