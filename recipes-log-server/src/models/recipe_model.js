'use strict';

const mongooes = require('mongoose');

const RecipeSchema = mongooes.Schema({

    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    chef: {
        type: String,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    process: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongooes.model('recipes', RecipeSchema);
