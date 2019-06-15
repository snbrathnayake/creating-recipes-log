'use strict';
//const whitelist = ['http://localhost:3000', 'http://localhost:4200'];

module.exports = function (app) {
    const cors = require('cors');

    const corsOptions = {
        origin: function (origin, callback) {
            // console.log(`\norigin-header:  ${origin} \n`)
            if (process.env.CORS_WHITELIST.split(' ').indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CROS configuration'));
            }
        },
        methods: "GET , HEAD , PUT , PATCH, POST , DELETE , OPTIONS"
    }
    app.options("*", cors(corsOptions));
    app.use(cors(corsOptions));
}
