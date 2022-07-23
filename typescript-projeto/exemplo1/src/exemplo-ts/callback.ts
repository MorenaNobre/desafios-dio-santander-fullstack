function somarValoresNumericosETratar(
  numero1: number,
  numero2: number,
  callback: (numero: number) => number
): number {
  let resultado = numero1 + numero2;
  return callback(resultado);
}

function aoQuadrado(numero: number): number {
  return numero * numero;
}

function numeroModulo(numero: number): number {
  // return numero % 2;
  if(numero % 2 === 0) {
    console.log("Número é par.")
  } else {
    console.log("Número é ímpar.")
  }
  console.log(`E o número é: ${numero}.`)
  return numero
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosETratar(20, 3, numeroModulo))
