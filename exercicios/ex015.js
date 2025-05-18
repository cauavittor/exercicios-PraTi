function welcome (){
  console.log('Exercício 15: Fibonacci.');
  console.log('O seguinte código apresenta os primeiros 10 números da sequência de Fibonacci. \n');
}
function fibonacci (){
  welcome();

  const fibonacci = [0, 1];

  for (let i = 2; i <= 9; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  console.log(`Os primeiros 10 números da sequência de Fibonacci são: ${fibonacci.join(', ')}`);
}

fibonacci();