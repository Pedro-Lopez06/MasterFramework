'use strict'

var validator = require('validator');
const article = require('../models/article');
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
        
    },
    getArticles: (req, res) =>{

        var query = Article.find({});

        var last = req.params.last;

        if (last || last != undefined) {
            query.limit(5);
        }

        query.sort('-_id').then(articles =>{ //sort muestra los articulos recientes primero 

            return res.status(200).send({
                status: 'success',
                articles
            });

        }).catch(err =>{

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }

        });

       
    }

} //end controller

module.exports = controller;
