'use strict';

module.exports = function(app) {
    const routeRecipes = require('./recipes');
    const routeFeedback = require('./feedback');
    
    routeRecipes(app);
    routeFeedback(app);
}