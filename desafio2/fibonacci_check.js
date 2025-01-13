function isFibonacci(num) {
  let a = 0,
    b = 1,
    temp;

  while (b <= num) {
    if (b === num) return true;
    temp = a + b;
    a = b;
    b = temp;
  }
  return num === 0;
}

const numero = 21; // Substitua pelo número desejado
console.log(
  `O número ${numero} pertence à sequência de Fibonacci?`,
  isFibonacci(numero)
);
