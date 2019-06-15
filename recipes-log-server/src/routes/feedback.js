'use strict';

module.exports = function (app) {
    const controller = require('../controllers/feedback_api');

    app.route('/recipes/feedback/:id')
        .get(controller.getFeedback)
        .put(controller.updateFeedback) // update current value (+)
        .delete(controller.removeFeedback) // update current value (-)
}