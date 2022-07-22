"use strict";
//objeto
const pessoa = {
    nome: "Morena",
    idade: 39,
    profissao: "desenvolvedora",
};
pessoa.idade = 40;
const raira = {
    nome: "Raira",
    idade: 30,
    profissao: "Nutricionista",
};
const luciano = {
    nome: "Luciano",
    idade: 63,
    profissao: "Engenheiro Químico",
};
//enum um grupo de constantes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 24,
    profissao: Profissao.Desenvolvedora,
};
const maria = {
    nome: "Maria",
    idade: 32,
    profissao: Profissao.Atriz,
};
const jessica = {
    nome: "Jessica",
    idade: 58,
    profissao: Profissao.Desenvolvedora,
    materias: ["Matemática", "Calc1", "Java"],
};
const lucas = {
    nome: "Lucas",
    idade: 15,
    materias: ["Matemática", "Portugues", "Química"],
};
function listar(nome, lista) {
    for (const item of lista) {
        console.log(`${nome}: - `, item);
    }
}
listar(lucas.nome, lucas.materias);
listar(jessica.nome, jessica.materias);
