//Andy Navarro
//Student ID: 301185124
//A2_Web Dev
//06-NOV-2021

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Bookshelves',
    books: ''
   });
});

module.exports = router;
