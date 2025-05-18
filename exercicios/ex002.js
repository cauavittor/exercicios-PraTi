import PromptSync from "prompt-sync";

const prompt = PromptSync();

function bemVindo ()  {
 console.log("Bem vindo a calculadora.")
 console.log(" ")
}

function getIdade() {
 let idade = prompt("digite sua idade: ")
 idade = Number(idade)

  while (isNaN(idade) || idade < 0){
  
   console.log ("idade invalida. Tente novamente.")
   idade = prompt("digite sua idade: ")
   idade = Number(idade)
  
   }
   
  
  return idade;
}


function app() {
 bemVindo();


 const idade = getIdade()

 console.log(" ")

 if (idade < 12){
  console.log (`Conforme a sua idade ${idade} você é uma criança.`)
 } if (idade >= 12 && idade < 18){
  console.log(`Conforme a sua idade ${idade} você é um adolescente.`)
 } if (idade >= 18 && idade < 60){
  console.log (`Conforme a sua idade ${idade} você é um adulto`)
 } if (idade > 59) {
  console.log (`Conforme a sua idade ${idade} você é um idoso`)
 }

}


app();