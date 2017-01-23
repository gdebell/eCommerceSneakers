(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const thisShoe = require('../routes/thisShoe');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/thisShoe', thisShoe);
  };

})(module.exports);
