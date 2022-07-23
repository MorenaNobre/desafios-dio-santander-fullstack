"use strict";
console.log("Sou o desafio 1");
const tieta = {
    codigo: 42,
    nome: "Tieta do Agreste",
};
const tonho = {
    codigo: 43,
    nome: "Tonho da Lua",
};
function funcionarios(codigo, nome) {
    console.log(`O código de ${nome} é: ${codigo}`);
}
funcionarios(tieta.codigo, tieta.nome);
funcionarios(tonho.codigo, tonho.nome);
// == Resposta2 == //
const objFuncionario = {};
objFuncionario.codigo = 44;
objFuncionario.nome = "Xuxa Meneguel";
console.log(objFuncionario);
// == Resposta3 == //
const funcionario2 = {
    codigo: 10,
    nome: "Silvio Santos",
};
console.log(funcionario2);
