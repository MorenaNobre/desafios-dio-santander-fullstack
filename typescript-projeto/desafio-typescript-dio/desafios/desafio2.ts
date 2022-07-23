console.log("Sou o desafio 2");
// Como podemos melhorar esse código usando TS?

/**
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
 */

// == RESPOSTA ==//
enum Profissao {
  Atriz,
  Padeiro,
  Engenheiro,
  Desenvolvedor,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

const lineu: Pessoa = {
  nome: "Lineu Santos",
  idade: 42,
  profissao: Profissao.Engenheiro
}

const natalia: Pessoa = {
  nome: "Natalia dos Deuses",
  idade:29,
  profissao: Profissao.Atriz,
}

const vinicius: Pessoa = {
  nome: "Vinicius Tadeu",
  idade: 32,
  profissao: Profissao.Desenvolvedor
}

function listar(nome: string, idade: number, profissao: Profissao) {
  console.log(`Meu nome é ${nome}, eu tenho ${idade} anos e minha profissão é ${profissao}`)
}

listar(lineu.nome, lineu.idade, lineu.profissao)
listar(natalia.nome, natalia.idade, natalia.profissao)
listar(vinicius.nome, vinicius.idade, vinicius.profissao)