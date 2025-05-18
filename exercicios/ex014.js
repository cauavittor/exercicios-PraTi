import PromptSync from "prompt-sync";
const prompt = PromptSync()

function exercicio(){
 console.log("Exericio 14 - Fatorial ")
 console.log("\n")
}

function app(){
 exercicio()
 let fatorial = 1
 let numero = parseInt(prompt("Digite um valor para descobrir seu fatorial: "))
 for(let i = numero; i >1; i--){
  fatorial = fatorial * i
  
 }

 console.log(fatorial)
}
app()