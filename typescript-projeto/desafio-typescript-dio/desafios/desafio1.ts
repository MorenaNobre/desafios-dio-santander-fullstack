console.log("Sou o desafio 1")
//Como podemos rodar o código abaixo em um arquivo .ts sem causar erros?

/** 
let funcionario = {};
funcionario.codigo = 10;
funcionario.nome = "John Doe";
*/

// == RESPOSTAS == //

// == Resposta1 == //
interface Funcionario {
  codigo: number;
  nome: string;
}

const tieta: Funcionario = {
  codigo: 42,
  nome: "Tieta do Agreste",
};

const tonho: Funcionario = {
  codigo: 43,
  nome: "Tonho da Lua",
};

function funcionarios(codigo: number, nome: string) {
  console.log(`O código de ${nome} é: ${codigo}`);
}

funcionarios(tieta.codigo, tieta.nome)
funcionarios(tonho.codigo, tonho.nome)


// == Resposta2 == //
const objFuncionario = {} as Funcionario;
objFuncionario.codigo = 44;
objFuncionario.nome = "Xuxa Meneguel"

console.log(objFuncionario);


// == Resposta3 == //
const funcionario2: {codigo:number, nome:string} = {
  codigo: 10,
  nome: "Silvio Santos",
}

console.log(funcionario2)