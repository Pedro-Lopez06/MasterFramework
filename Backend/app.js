'use strict'

//Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros


// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors

// Añadir prefijos a rutas

// ruta de prueba para el API
app.get('/datos-curso', (req, res) => {
    
    return res.status(200).send({
        curso: 'Master en framework js',
        autor: 'Victor Robles Web ',
        alumno: 'Pedro Lopez'
    });

});


// Exportar modulos (fichero actual)
module.exports = app;