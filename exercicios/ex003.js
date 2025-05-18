import PromptSync from "prompt-sync";

const prompt = PromptSync()


function welcome(){
 console.log ("Exercicio 3 - verificação de notas")
 console.log (" ")
}


function getNota(){
 let notaDoAluno = prompt("Digite a nota da sua ultima prova: ")
 notaDoAluno = parseFloat(notaDoAluno)

 if(isNaN(notaDoAluno) || notaDoAluno > 10){
  console.log("nota invalida. Tente novamente")
  return getNota
 }
 return notaDoAluno
}

function app(){
 welcome()

 let nota = getNota();

 if(nota >= 6){
  console.log("Parabéns, você está aprovado.")
 } else{
  console.log("Você esta reprovado.")
 }
}


app()