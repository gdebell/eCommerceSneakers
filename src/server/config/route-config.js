(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const thisShoe = require('../routes/thisShoe');
    const newShoe = require('../routes/newShoe');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/thisShoe', thisShoe);
    app.use('/newShoe', newShoe);
  };

})(module.exports);
