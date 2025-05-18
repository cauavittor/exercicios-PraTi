import PromptSync from "prompt-sync";
const prompt = PromptSync()

function exercicio(){
 console.log("Exercicio 9 - Contagem regressiva")
 console.log("\n")
}

function app(){
 exercicio()
 let numero = 1
 
 for(let i = 10; i >= numero; i--){

   console.log(i)
 }
}
app()