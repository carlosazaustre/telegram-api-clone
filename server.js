const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const config = require('./config');
const router = require('./network/routes');

db(config.URL);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);
app.use(config.PUBLIC_ROUTE, express.static('public'));

server.listen(config.PORT, () => {
  console.log(`App is running on ${config.HOST}:${config.PORT}`)
});