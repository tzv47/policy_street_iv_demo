const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const port = require('./config').port;

const api = require('./api');

app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(api);

server.listen(port, () => {
  console.log('Server Started at : ' + port);
});
