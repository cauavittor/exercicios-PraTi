import PromptSync from "prompt-sync";

const prompt = PromptSync()


function welcome () {
 console.log("Exercicio 1 - Verificação de números.")
 console.log(" ")

}


function entradaNumero(){
 let numero = prompt("Digite um numero inteiro: ")

 numero = parseInt(numero)
 if(isNaN(numero)){
  console.log ("Entrada de valores incompativel com a da operação. tente novamente")
   return entradaNumero()
 }

 return numero;
}


function app() {
 welcome()


 let numero = entradaNumero()

 if(numero % 2 == 0 ){
  console.log (`${numero} é um numero par` )
 } if(numero % 2 == 1) {
  console.log (`${numero} é um numero impar` )
 }
}

app();