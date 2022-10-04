const readline = require('readline-sync');

const weight = readline.questionInt('What your weight?');
const height = readline.questionFloat('What your heigth');

const tableImc = (value) => {
    const imc = Number(value);
    switch (imc) {
        case imc < 18.5:
            return 'Abaixo do peso (magreza)';
            break;
    
        default:
            break;
    }
}

const imc = (weight, height) => (weight / height ** 2).toFixed(2);


console.log(imc(weight, height));
