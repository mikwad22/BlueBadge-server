//env
require('dotenv').config()

const express = require ('express');
const app = express();
const cors = require('cors');

//controllers
const log = require('./controllers/logcontroller');
const user = require('./controllers/usercontroller');

//database
const sequelize = require('./db');
sequelize.sync();
app.use(express.json());

//middleware
app.use(require('./middleware/headers'));
app.use(cors());

//listen
app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));

//routes
app.use('/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/moods', log);