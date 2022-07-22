// //acesso a types -> tipos, estruturas de dados para os parâmetros da sua classe.
// //acesso a interfaces -> contrato para implementação das classes.

// // //Exemplo Interface
// interface IAnimal {
//   name: string;
//   type: "terrestre" | "aquatico";
//   domestico: boolean;
//   // executarRugido(alturaEmDecibeis: number): void;
// }

// //pode extender a interface
// interface IFelino extends IAnimal {
//   visaoNotura: boolean,
// }

// //exemplo type
// interface ICanino extends IAnimal {
//   porte: "pequeno" | "medio" | "grande"
// }

// type IDomestico = IFelino | ICanino;

// const animal: IDomestico = {
//   name: "Cachorro",
//   type: "terrestre",
//   domestico: false,
//   porte: "pequeno",
//   // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`),
// }

// // animal.executarRugido(1000)
// // console.log(animal)

// const felino: IFelino = {
//   name: "Gato",
//   type: "terrestre",
//   visaoNotura: true,
//   domestico: true,
//   // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`),
// }

// // console.log(felino)

// //==============================================================

// // function soma(a: number, b: number) {
// //   return a + b;
// // }

// // console.log(soma(13, 10))

// const input = document.getElementById("input") as HTMLInputElement;

// //tratamento de input

// input.addEventListener("input", (event) => {
//   const i = event.currentTarget as HTMLInputElement;
// })

function adicionaApendiceALista<T>(array: T[], valor: T) {
  //generic types
  return array.map(() => valor);
}

//pede que sejam todos os tipos de dados iguais
adicionaApendiceALista(["A", "B", "C"], "d");


//Desenvolvendo Condicionais a partir de parâmetros
interface IUsuario {
  id: string;
  email: string;
  //Variáveis opcionais com caracter "?"
  cargo?: "funcionario" | "gerente" | "coordenador" | "supervisor",
}

// interface IAdmin extends IUsuario {
//   cargo: "gerente" | "coordenador" | "supervisor",
// }

function redirecione(usuario: IUsuario) {
  if(usuario.cargo) {
    //redirecionar(usuario.cargo);
  }

  //redirecionar para área do usuario
}

//Readonly e private

interface Cachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
  idade;
  nome;
  parqueFavorito: any;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro("Bidu", 8);
console.log(cao)


//Importando biblioteca

import $ from "jquery";

$.fn.extend({
  novaFuncao() {
    console.log("Chamou nova função")
  }
})

$("body").novaFuncao();
