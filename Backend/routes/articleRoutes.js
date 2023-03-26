'use strict'

var express = require('express');
var ArticleController = require('../controllers/articleController');

var router = express.Router();

// rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-controlador', ArticleController.test);

// rutas para articulos
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);

module.exports = router;