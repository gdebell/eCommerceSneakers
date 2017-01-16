var environment = process.env.NODE_ENV;
const config = require('../../../knexfile.js')[environment];
const knex = require('knex')(config);

module.exports = knex;
