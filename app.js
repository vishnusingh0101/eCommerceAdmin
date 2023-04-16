const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const sequelize = require('./util/database');
 
const adminRoute = require('./routes/admin');

app.use(bodyParser.json());

app.use('/admin', adminRoute);

sequelize.sync()
.then(result => {
    app.listen(4000);
})
.catch(err => console.log(err));

