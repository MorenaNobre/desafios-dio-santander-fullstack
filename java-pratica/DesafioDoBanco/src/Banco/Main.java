package Banco;

public class Main {

    public static void main(String[] args) {

        Cliente morena = new Cliente();
        morena.setNome("Morena");

        Conta cc = new ContaCorrente(morena);
        Conta poupanca = new ContaPoupanca(morena);
        cc.depositar(100);
        cc.sacar(25);


        cc.transferir(50, poupanca);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
    }

}
