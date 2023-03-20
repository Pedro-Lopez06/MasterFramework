'use strict'

var controller = {
    datosCurso: (req, res) => {
    
        return res.status(200).send({
            curso: 'Master en framework js',
            autor: 'Victor Robles Web ',
            alumno: 'Pedro Lopez'
        });
    
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        });
    }
} //end controller

module.exports = controller;
