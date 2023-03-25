'use strict'

var validator = require('validator');
var Article = require('../models/article');

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
    },

    save: (req,res) =>{
        // Recoger parametros por post
        var params = req.body;
        // Validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);


        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {
            // Crear objeto a guardar
            var article = new Article();
            // Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;
            // Guardar articulo
            article.save().then(result =>{
                return res.status(200).send({
                    status: 'success',
                    article
                });
            }).catch(error=>{
                console.error(error);
            });
            
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }
        
    }

} //end controller

module.exports = controller;
