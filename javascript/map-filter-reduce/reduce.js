function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev });
    console.log({ current });
    return prev + current;
  });
}

const arr = [1, 2, 3];
console.log(somaNumeros(arr));

//==============================================================

const produtos = [
  {
    name: "carne",
    preco: 30,
  },
  {
    name: "toalha",
    preco: 12,
  },
  {
    name: "arroz",
    preco: 8,
  },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, produtos) {
  return produtos.reduce(function (prev, current, index) {
    console.log("rodada", index + 1);
    console.log({ prev });
    console.log({ current });
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, produtos))
