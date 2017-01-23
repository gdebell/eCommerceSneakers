const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  return knex('sneaker_table')
  .select('*')
  .where('id', id)
  .then(function (data) {
    //console.log(data);
    const renderObject = {};
    renderObject.shoe = data;
    res.render('thisShoe', renderObject);
  });
});

router.delete('/:id/delete', function (req, res, next) {
  let id = parseInt(req.params.id);
  knex('sneaker_table')
  .del()
  .where('id', id)
  .select('id')
  .then(() => {
    console.log('delete was successful!');
    res.send({
      message: 'Delete was successful!'
    });
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

router.get('/:id/update', function(req, res, next) {
  let id = req.params.id;
  let renderObject = {};
  renderObject.data = id;
  res.render('updateShoe', renderObject);
});

router.post('/:id/update', function(req, res, next) {
  let id = parseInt(req.params.id);
  knex('sneaker_table')
  .where('id', id)
  .update({
    name: req.body.name,
    price: req.body.price,
    image_url: req.body.image_url,
    description: req.body.description,
    size: req.body.size,
    condition: req.body.condition
  })
  .select('*')
  .then(() => {
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

module.exports = router;
