const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  return knex('sneaker_table')
  .then(function(data) {
    //renderObject is carrying our data to the front end
    const renderObject = {};
    renderObject.shoes = data;
    //we send renderObject in our response, after the view file
    res.render('index', renderObject);
  });
});

router.get('/newShoe', function (req, res, next) {
  res.render('newShoe');
});

router.post('/newShoe', function (req, res, next) {
  knex('sneaker_table')
  .insert({
    name: req.body.name,
    price: req.body.price,
    image_url: req.body.image_url,
    description: req.body.description,
    size: req.body.size,
    condition: req.body.condition
  })
  .select('*')
  .then(() => {
    console.log('hey');
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

router.get('/lowToHigh', function(req, res, next) {
  return knex('sneaker_table')
  .select('*')
  .orderBy('price')
  .then(function(data) {
    const renderObject = {};
    renderObject.shoes = data;
    res.render('index', renderObject);
  });
});

router.get('/highToLow', function(req, res, next) {
  return knex('sneaker_table')
  .select('*')
  .orderBy('price', 'desc')
  .then(function(data) {
    const renderObject = {};
    renderObject.shoes = data;
    res.render('index', renderObject);
  });
});

module.exports = router;
