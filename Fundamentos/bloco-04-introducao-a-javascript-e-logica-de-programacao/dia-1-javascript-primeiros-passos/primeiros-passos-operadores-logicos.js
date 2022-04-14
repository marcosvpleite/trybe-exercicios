//operador AND
const currentHour = 20;
let message;
if(currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
if(currentHour > 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
}
if(currentHour > 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
}
if(currentHour > 11 && currentHour < 14){
    message = "Hora do almoço!!!";
}
if(currentHour > 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

//operador OR

let weekDay = "quarta-feira"
if(weekDay = "segunda-feira" || "terça-feira" || "quarta-feira" || "quinta-feira" || "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else {
    console.log("FINALMENTE, descanso merecido UwU");
}