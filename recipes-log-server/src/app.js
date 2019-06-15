//ECMAScript v5
//JavaScript code should be executed in "strict mode"
//global scope (all code in the script will execute in strict mode)
// ex: x = 3.14;  // This will cause an error (x is not defined).

'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// import custome files
const configs = require('../configs/db');
const routes = require('./routes');
const cors = require('./cors');

const database = configs.databse;

mongoose.Promise = global.Promise;
mongoose.connect(database , { useNewUrlParser: true }).then(con => console.log(`db connected.\n`)).catch(e =>console.log(`unabled to connect to database ${e}`));
mongoose.set('useFindAndModify' , false);

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

cors(app);
routes(app);

app.listen(port, () => console.log('server started on PORT : ', port));