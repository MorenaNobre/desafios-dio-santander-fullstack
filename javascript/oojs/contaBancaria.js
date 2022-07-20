class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
    //sempre que um valor for ter um getter/setter coloca um uderline na frente(this._saldo) para que possamos utilizar o nome no getter/setter
  }

  //getter/setter
  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  //métodos
  sacar(valor) {
    if (valor > this._saldo) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero, cartaoCredito);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;
  }
}

//========================================================

const minhaConta = new ContaCorrente(1, 234, true);
console.log(minhaConta.depositar(1000))
console.log(minhaConta.sacar(476))
console.log(minhaConta.sacar(600))
console.log(minhaConta.sacar(524))
console.log(minhaConta.saldo)

//========================================================
const contaPoupa = new ContaPoupanca(2, 587)
console.log(contaPoupa)
console.log(contaPoupa.saldo)
console.log(contaPoupa.depositar(700))
console.log(contaPoupa.sacar(100))

//==========================================================
const contaUni = new ContaUniversitaria(4, 1024)
console.log(contaUni)
console.log(contaUni.saldo)
console.log(contaUni.depositar(700))
console.log(contaUni.sacar(600))