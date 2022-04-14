// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const ladoA = 90;
const ladoB = 60;
const ladoC = 40;
let triangulo = ladoA + ladoB + ladoC;

console.log(triangulo === 180);

