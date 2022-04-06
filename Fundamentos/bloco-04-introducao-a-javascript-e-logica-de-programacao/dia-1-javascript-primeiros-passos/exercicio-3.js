// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numero3 = 5;
const numero4 = 8;
const numero5 = 10;
if (numero3 > numero4 && numero3 > numero5) {
    console.log(numero3);
} else if (numero4 > numero3 && numero4 > numero5) {
    console.log(numero4);
} else {
    console.log(numero5);
}