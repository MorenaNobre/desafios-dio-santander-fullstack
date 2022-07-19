function filtraPares(arr) {
  return arr.filter(callbackPares);
}

function callbackPares(item) {
  return item % 2 === 0;
}

function filtraImpares(arr) {
  return arr.filter(callbackImpares);
}

function callbackImpares(item) {
  return item % 2 !== 0;
}

const meusNumeros = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meusNumeros));
console.log(filtraImpares(meusNumeros));
