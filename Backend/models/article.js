'use strict'

var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

// Modelo de la tabla article 

var ArticleSchema = Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);