'use strict';

module.exports = function (app) {
    const controller = require('../controllers/recipe_api');

    app.route('/recipes/category')
        .get(controller.searchRecipeByTopic)

    app.route('/recipes')
        .get(controller.getRecipe)
        .post(controller.addRecipe)

    app.route('/recipes/:id')
        .get(controller.getRecipeById)
        .put(controller.updateRecipe)
        .delete(controller.destroyRecipe)
}

/**
 * router.get('/api/?', (req, res, next) => {});
 */