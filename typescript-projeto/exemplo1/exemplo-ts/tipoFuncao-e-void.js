"use strict";
//definição do tipo de retorno da função -> uma função pode receber um tipo quando necessário
function somaValores(numero1, numero2) {
    //abaixo fica com erro
    // return numero1 + numero2.toLocaleString();
    return numero1 + numero2;
}
console.log(somaValores(3, 3));
//void function -> a função vai rodar, mas não vai retornar nada.
function printaValores(numero1, numero2) {
    console.log(numero1 + numero2); //nao retorna nada
}
