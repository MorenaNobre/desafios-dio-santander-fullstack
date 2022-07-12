function compareNumbers(num1, num2) {
  const firstFrase = createFirstFrase(num1, num2);
  const secondFrase = createSecondFrase(num1, num2);

  return`${firstFrase} ${secondFrase}`;
}

function createFirstFrase(num1, num2) {
  let firstFrase = `The numbers ${num1} and ${num2}`
	let ifNot = "are not equal."

  if (num1 === num2) {
    ifNot = "are equal.";
  }

  return `${firstFrase} ${ifNot}`;
}

function createSecondFrase(num1, num2) {
  const sum = num1 + num2;
	let compare10 = "lesser";
	let compare20 = "lesser";

  if(sum > 10) {
    compare10 = "larger"
  }

  if(sum > 20) {
    compare20 = "larger"
  }

  return `The sum is ${sum}, that is ${compare10} than 10 and ${compare20} and than 20.`;
}

console.log(compareNumbers(12, 12))

// function comparaNumeros(num1, num2) {
// 	const primeiraFrase = criaPrimeiraFrase(num1, num2);
// 	const segundaFrase = criaSegundaFrase(num1, num2);

// 	return `${primeiraFrase} ${segundaFrase}`;
// }

// function criaPrimeiraFrase(num1, num2) {
// 	let primeiraFrase = `Os números ${num1} e ${num2}`;
// 	let simNao = 'não';

// 	if (num1 === num2) {
// 		simNao = '';
// 	}

// 	return `${primeiraFrase} ${simNao} são iguais.`;
// }

// function criaSegundaFrase(num1, num2) {
// 	const soma = num1 + num2;
// 	let comparaDez = 'menor';
// 	let comparaVinte = 'menor';

// 	if (soma > 10) {
// 		comparaDez = 'maior';
// 	}

// 	if (soma > 20) {
// 		comparaVinte = 'maior';
// 	}

// 	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
// }

// console.log(comparaNumeros(10, 10));