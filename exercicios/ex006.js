import PromptSync from "prompt-sync";

const prompt = PromptSync()

function exercicio(){
 console.log("Exercicio 6 - Verificar o tipo de um triângulo")
 console.log("\n")
}

function getNumberA(){
 let A = parseFloat(prompt("Digite o valor de A: "))

 if(isNaN(A)){
  console.log("Valor invalido. Digite novamente.")
  return getNumberA()
 }

 return A
}

function getNumberB(){
 let B = parseFloat(prompt("Digite o valor de B: "))

 if(isNaN(B)){
  console.log("Valor invalido. Digite Novamente")
  return getNumberB()
 }

 return B
}

function getNumberC(){
 let C = parseFloat(prompt("Digite o valor de C: "))

 if(isNaN(C)){
  console.log("Valor invalido. Digite novamente.")
  return getNumberC()
 }

 return C
}


function app(){
 exercicio()

 let valorA = getNumberA()
 let valorB = getNumberB()
 let valorC = getNumberC()
 let isTriangulo;
 if(valorA + valorB > valorC && valorC + valorB > valorA && valorA + valorC > valorB){
   isTriangulo = true;
  console.log("Os valores formam um triangulo")
  console.log("\n")
  }
  else {
   isTriangulo = false
   console.log("Os valores nao formam um triangulo")
  } 

  switch(isTriangulo){
  case isTriangulo == true:
  if (valorA != valorB && valorB != valorC){
  console.log ("Os valores formam um triangulo escaleno")
 }else if (valorA === valorB && valorA === valorC && valorB === valorC){
  console.log("Os valores formam um triângulo equilátero.")
 } else{
   console.log ("Os valores formam um triângulo isóceles.")
 }
 break
 case isTriangulo == false:
 console.log("\n")
 break
}
}
 
app()