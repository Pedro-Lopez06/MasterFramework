'use strict'

var express = require('express');
var ArticleController = require('../controllers/articleController');

var router = express.Router();

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-controlador', ArticleController.test);


module.exports = router;