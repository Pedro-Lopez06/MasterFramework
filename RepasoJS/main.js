// alert('Hola mundo');

var nombre = "Pedro Lopez";
var altura = 190;

// var concatenacion = nombre + " " + altura;

// var datos = document.getElementById("datos");
// datos.innerHTML = `
//     <h1> Soy la caja de datos </h1>
//     <h2> Mi nombre es: ${nombre} </h2>
//     <h3> Mido: ${altura} cm </h3>
// `;

// if(altura >= 190){
//     datos.innerHTML += '<h1> Eres una persona alta </h1>'
// }else{
//     datos.innerHTML += '<h1> Eres una persona bajita </h1>'
// }

function MuestraMiNombre(nombre, altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = `
        <h1> Soy la caja de datos </h1>
        <h2> Mi nombre es: ${nombre} </h2>
        <h3> Mido: ${altura} cm </h3>
    `;
}

MuestraMiNombre("Pedro López", 179);


var coche = {
    modelo: 'Mercedez Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    }
};

document.write("<h1>"+coche.modelo+"</h1>")
coche.mostrarDatos();
console.log(coche);


// PROMESAS EN JAVASCRIPT
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas chavales!!";

        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    },2000);
    
});

saludar.then(resultado =>{
    alert(resultado);
})
.catch(err => {
    alert(err);
})