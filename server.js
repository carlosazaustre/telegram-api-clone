const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const config = require('./config');
const router = require('./network/routes');

db(config.DB_URL);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use(config.PUBLIC_ROUTE, express.static('public'));

server.listen(config.PORT, function() {
  console.log(`App is running on ${config.HOST}:${config.PORT}`)
});