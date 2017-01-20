const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  return knex("sneaker_table")
  .select("*")
  .where("id", id)
  .then(function (data) {
    console.log(data);
    const renderObject = {};
    renderObject.shoe = data;
    res.render('thisShoe', renderObject)
  })
})

router.delete('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  knex("sneaker_table")
  .del()
  .where("id", id)
  .select("id")
  .returning("*")
  .then((result) => {
    console.log(result);
    res.redirect('/');
  })
})

module.exports = router;
