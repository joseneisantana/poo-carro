
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    dirigir() {
        throw new Error('Método "dirigir" deve ser implementado');
    }

    parar() {
        throw new Error('Método "parar" deve ser implementado');
    }
}


class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor) {
        super(marca, modelo, ano);
        this.cor = cor;
    }

    dirigir() {
        return `O carro ${this.marca} ${this.modelo} (${this.ano}, cor ${this.cor}) está acelerando.`;
    }

    parar() {
        return `O carro ${this.marca} ${this.modelo} está freando.`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    dirigir() {
        return `A moto ${this.marca} ${this.modelo} (${this.ano}, ${this.cilindradas}cc) está em movimento.`;
    }

    parar() {
        return `A moto ${this.marca} ${this.modelo} está reduzindo a velocidade.`;
    }
}


let carro1 = new Carro("Toyota", "Corolla", 2022, "Prata");
let moto1 = new Moto("Honda", "CBR 600RR", 2021, 600);
let carro2 = new Carro("Volkswagen", "Golf", 2020, "Branco");

console.log(carro1.dirigir());
console.log(carro1.parar());
console.log(moto1.dirigir());
console.log(moto1.parar());
console.log(carro2.dirigir());
console.log(carro2.parar());
