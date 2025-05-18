import PromptSync from "prompt-sync";
const prompt = PromptSync()

function exercicio(){
 console.log("Exercicio 8 - Ordem crescente")
 console.log("\n")

}

function app (){
 exercicio()

 let numero1 = Number(prompt("Digite o valor de primeiro numero: "))
 let numero2 = Number(prompt("Digite o valor do segundo numero: "))

 if(numero1 === numero2){
  console.log("Operação invalida. Tente novamente")
  return app()
 } if(numero1 > numero2){
  console.log(`Seguindo a ordem Crescente: ${numero1}, ${numero2}`)
 } else{
  console.log(`Seguindo a ordem crescente dos numeros: ${numero2}, ${numero1}`)
 }
}
app()