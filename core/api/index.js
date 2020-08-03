const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');

router.get('/test', (req, res) => {
  res.send({ msg: 'hello! Server is up and running' });
});

router.post('/login', passport.authenticate('local'), (request, response) => {
  response.status(200).send(request.user);
});

router.use('/users', require('./users'));
router.use('/policies', require('./policies'));
router.use('/clients', require('./clients'));

app.use(router);

// the catch all route
app.all('*', (req, res) => {
  res.status(404).send({ msg: 'not found' });
});

module.exports = app;
