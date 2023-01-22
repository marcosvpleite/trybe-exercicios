// usamos a palavra reservada class para definir uma classe
class Person {
    name: string;
    birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
    age: number;
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name: string, birthDate: Date, age: number) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name  = name;
        this.birthDate  = birthDate;
        this.age  = age;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
};
// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "age": 27
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "age": 42
// }
// "Jon Doe está andando."

class Dog {
    name: string;
    color:string;
    age: number;

    constructor(name: string, color: string, age: number) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    
    bark():void {
        console.log('Au Au');
        
    }
}

class House {
    owner: string;
    address: string;
    color: string;
    area: number;

    constructor(owner: string, address: string, color: string, area: number){
        this.owner = owner;
        this.address = address;
        this.color = color;
        this.area = area;
    }
}

class Flight {
    origin: string;
    destination: string;
    departureDate: Date;
    arrivalDate: Date;
    passengers: number;

    constructor(origin: string, destination:string, departureDate: Date, arrivalDate: Date, passengers: number) {
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.passengers = passengers;
    }
}


interface Automobile {
    name: string;
    brand: string;
    color: string;
    doors: number;
    gears: number;
    turnOn: () => void;
    turnOff: () => void;
    speedUp: () => void;
    speedDown: () => void;
    break: () => void;
}

interface Feline {
    name: string;
    subfamilies: string;
    walk: () => void;
    hunt: () => void;
    eat: () => void;
    sleep: () => void;
}

interface Aircraft {
    model: string;
    brand: string;
    wings: number;
    engines: number;
    isManned: boolean;
    turnOn: () => void;
    turnoOff: () => void;
    speedUp: () => void;
    speedDown: () => void;
}