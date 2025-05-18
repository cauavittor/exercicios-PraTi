import PromptSync from "prompt-sync";
const prompt = PromptSync()

function exericio (){
 console.log("Exercicio 11 - Soma total")
 console.log("\n")
}

function app(){
 exericio()
let soma = 0;

for(let i = 0; i < 6; i++){
 let numero = Number(prompt("Digite um numero inteiro: "))
 soma += numero

 
}
console.log("valor da soma: " + soma)
}
app()