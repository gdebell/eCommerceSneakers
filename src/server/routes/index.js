const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  return knex('sneaker_table')
  .then(function(data) {
    console.log(data);
    //renderObject is carrying our data to the front end
    const renderObject = {};
    renderObject.shoes = data;
    //we send renderObject in our response, after the view file
    res.render('index', renderObject);
  });

});

module.exports = router;
