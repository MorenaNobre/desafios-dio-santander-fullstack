//objeto
const pessoa = {
  nome: "Morena",
  idade: 39,
  profissao: "desenvolvedora",
};

pessoa.idade = 40;

const raira: { nome: string; idade: number; profissao: string } = {
  nome: "Raira",
  idade: 30,
  profissao: "Nutricionista",
};

const luciano: { nome: string; idade: number; profissao: string } = {
  nome: "Luciano",
  idade: 63,
  profissao: "Engenheiro Químico",
};

//enum um grupo de constantes
enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 24,
  profissao: Profissao.Desenvolvedora,
};

const maria: Pessoa = {
  nome: "Maria",
  idade: 32,
  profissao: Profissao.Atriz,
};

const jessica: Estudante = {
  nome: "Jessica",
  idade: 58,
  profissao: Profissao.Desenvolvedora,
  materias: ["Matemática", "Calc1", "Java"],
};

const lucas: Estudante = {
  nome: "Lucas",
  idade: 15,
  materias: ["Matemática", "Portugues", "Química"],
};

function listar(nome: string, lista: string[]) {
  for (const item of lista) {
    console.log(`${nome}: - `, item);
  }
}

listar(lucas.nome, lucas.materias)
listar(jessica.nome, jessica.materias)