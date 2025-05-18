import PromptSync from "prompt-sync";

const prompt = PromptSync();

function Exercicio(){
 console.log ("Exercicio 4 - Menu Interativo")
 console.log ("\n")
}

function valorDaCompra(){
 let valor = prompt("Digite o valor da compra: ")
 valor = parseFloat(valor)
 if(isNaN(valor)){
  console.log("Valor inválido. Tente novamente")
  return valorDaCompra()
 }
  return valor;

}

function pix(){
  let valorPix = valorDaCompra()

  console.log("Sua forma de pagamento escolhida foi o pix.\n Com o pix você tem 10% de desconto")
  valorPix -= (valorPix * 0.10)
  console.log(`O valor da compra com desconto é de ${valorPix}`)
  
  return valorPix
}

function credito(){
 let valorCredito = valorDaCompra();

 console.log("Sua Forma de pagamento escolhida foi o credito. \n No crédito voce tem apenas 5% de desconto")
 valorCredito -= valorCredito * 0.05 
 console.log(`O valor da compra com desconto é de ${valorCredito}`)

 return valorCredito
}

function debito(){
 let valorDebito = valorDaCompra()

 console.log("Sua forma de pagamento escolhida foi o débito. \n No débito voce tem apenas 2% de desconto")
 valorDebito -= valorDebito * 0.02
 console.log(`O valor da compra com desconto é de ${valorDebito}`)

 return valorDebito
}


function app(){

 Exercicio()

 console.log("1 - débito")
 console.log ("2 - crédito")
 console.log("3 - pix")

 let numero = parseInt(prompt("Escolha sua forma de pagamento corresponde a um dos três numeros: "))

 if (isNaN(numero) || numero > 3 || numero < 1){
  console.log("Numero invalido tente novamente.")
   return app()
 }
 switch(numero){


  case 1: 
        debito();
        break;

  case 2:
       credito();
       break;
  case 3: 
      pix();
      break;

 }


}

app()