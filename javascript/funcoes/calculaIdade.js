function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "Morena",
  idade: 39
}

const pessoa2 = {
  nome: "Raira",
  idade: 30
}

const gato = {
  nome: "Linus",
  idade: 3,
  raca: "Maincoon"
}

console.log(calculaIdade.call(pessoa2, 10))
console.log(calculaIdade.call(pessoa1, 13))
console.log(calculaIdade.call(gato, 4))

console.log(calculaIdade.apply(pessoa2, [7]))
console.log(calculaIdade.apply(pessoa1, [3]))
console.log(calculaIdade.apply(gato, [6]))