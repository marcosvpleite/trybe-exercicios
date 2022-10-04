const readline = require('readline-sync');

const weight = readline.questionInt('What your weight?')
const height = readline.questionFloat('What your heigth')

const imc = (weight, height) => (weight / height ** 2).toFixed(2);


console.log(imc(weight, height));
