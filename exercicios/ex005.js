import PromptSync from "prompt-sync";
const prompt = PromptSync();

function Welcome(){
 console.log("Exercicio 5 - Tabela De IMC")
 console.log("\n")
}

function getAltura(){
 let altura = parseFloat(prompt("Digite sua altura: "))
 if(isNaN(altura)){
  console.log("Altura invalida, tente novamente.")
  return getAltura()
 }
  return altura;
}

function getPeso(){
 let peso = parseFloat(prompt("Digite seu peso: "))
 let altura = getAltura()
 if(isNaN(peso)){
  console.log("Peso invalido, tente novamente.")
  return getPeso()
 }
 let calculoIMC = peso / (altura * altura) 
 return calculoIMC;
}



function app(){

 Welcome()

 let pesoCalculado = getPeso()

 if(pesoCalculado < 18.5){
  console.log("Você está abaixo do peso ideal.")
 }else if(pesoCalculado > 18.4 && pesoCalculado < 25){
  console.log("Você está no peso ideal.")
 }else if(pesoCalculado > 24 && pesoCalculado < 30){
  console.log(" Você está pouco acima do peso ideal.")
 }else if( pesoCalculado > 29.9 && pesoCalculado < 35){
  console.log("Você está em nível de obesidade grau 1. Acima do peso ideal.")
 }else if(pesoCalculado > 34.9 && pesoCalculado < 40){
  console.log ("Você está em nível de obesidade grau 2. Acima do peso ideal.")
 } else {
  console.log("Você esta muito acima do peso ideal. OBESIDADE MÓRBIDA.")
 }

}

app()