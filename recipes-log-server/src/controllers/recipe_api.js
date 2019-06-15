'use strict';

const Recipe = require('../models/recipe_model');

exports.searchRecipeByTopic = function (req, res) {
    // http://localhost:3001/recipes/category?topic=snacks
    const topic = req.query['topic']; // queryParam
    Recipe.find({}, (err, recipes) => {

        if (err) res.send(err);
        if (topic !== undefined)
            res.json(recipes.filter((recipe) => recipe.category === topic));
    });
}

exports.getRecipe = function (req, res) {
    Recipe.find({}, (err, recipes) => {
        if (err) res.send(err);

        res.json(recipes);
    });
}

exports.addRecipe = function (req, res) {
    const recipeEntry = new Recipe(req.body);

    recipeEntry.save((err, recipes) => {
        if (err) res.send(err);

        res.json({
            message: 'success',
            status: 201,
            recipes: recipes
        });
    });
}

exports.getRecipeById = function (req, res) {
    Recipe.findById(req.params.id, (err, recipes) => {
        if (err) res.send(err);

        res.json(recipes);
    });
}

exports.updateRecipe = function (req, res) {
    // update: _id | uodate_body | option new:true | callback fun
    Recipe.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }, (err, recipes) => {
        if (err) res.send(err);

        res.json(recipes);
    });
}

exports.destroyRecipe = function (req, res) {
    Recipe.deleteOne({
        _id: req.params.id
    }, (err, recipes) => {
        if (err) res.send(err);

        res.json({
            message: `recipe entry ${recipes.title} was deleted.`
        });
    });
}