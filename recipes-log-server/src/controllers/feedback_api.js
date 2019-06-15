'use strict';

const Feed = require('../models/feedback_model');

exports.getFeedback = function (req, res) {
    Feed.findById(req.params.id, (err, feeds) => {
        if (err) res.send(err);

        res.json(feeds);
    });
}

exports.updateFeedback = function (req, res) {
    let recipeFeed = null;

    Feed.find({}, (err, feeds) => {
        if (err) res.send(err);
        recipeFeed = feeds.filter((feed) => feed.recipe_id === req.params.id);

        if (recipeFeed !== null) {
            const updatedFeed = {
                like_count: recipeFeed[0].like_count + (req.body.like_count)
            }
            Feed.findOneAndUpdate({_id: recipeFeed[0]._id}, updatedFeed, {new: true }, (err, feed) => {
                if (err) res.send(err);

                res.json(feed);
            });
        }
    });
}

exports.removeFeedback = function (req, res) {

    res.json('TODO');
}