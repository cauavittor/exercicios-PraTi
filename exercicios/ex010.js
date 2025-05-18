import PromptSync from "prompt-sync";
const prompt = PromptSync()

function exercicio(){
 console.log("Exericio 10 - Repetição de input")
 console.log("\n")
}

function app(){
 exercicio()

 let inputUsuario = prompt("Digite qualquer coisa para aparecer 10 vezes na tela: ")

 for (let i = 1; i <= 10; i++){
  console.log(i + " - " + inputUsuario)
 }
}
app()