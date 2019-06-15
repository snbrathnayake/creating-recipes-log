'use strict';

const mongooes = require('mongoose');

const FeedSchema = mongooes.Schema({

    recipe_id: {
        type: String,
        required: true
    },

    like_count: {
        type: Number,
        required: true
    },

    create_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongooes.model('Feeds', FeedSchema);
