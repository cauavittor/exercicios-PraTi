import PromptSync from "prompt-sync";

const prompt = PromptSync()

function exercicio(){
 console.log("Exercicio 7 - Preço baseado na quantidade")
 console.log("\n")
}


function app(){
 exercicio()

 let quantidadeDeMacas = parseInt(prompt("Digite a quantidade de maçãs que serão compradas: "))
 let valorDasMacas;
 if(quantidadeDeMacas < 12){
  valorDasMacas = quantidadeDeMacas * 0.30
  console.log(`O valor de ${quantidadeDeMacas} fica de ${valorDasMacas.toFixed(2)}`)
 } if(quantidadeDeMacas > 12){
  valorDasMacas = quantidadeDeMacas * 0.25
  console.log(`O valor de ${quantidadeDeMacas} fica de ${valorDasMacas.toFixed(2)}`)
 }

}
app()