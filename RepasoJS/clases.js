class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }
    
    reducirVelocidad(){
        this.velocidad -= 1;
    }
}


var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2018);
var coche3 = new Coche('Mercedes', 250, 2020);
var coche4 = new Coche('VW', 220, 2017);

document.write("<h1> Velocidad: "+ coche1.velocidad+"<h1>");

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write("<h1> Velocidad: "+ coche1.velocidad+"<h1>");

// Herencia
class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del autobus es: " + this.altura;
    }

}

var autobus1 = new Autobus('PEGASUS', 200, 2022);
console.log(autobus1);
console.log(autobus1.mostrarAltura);


