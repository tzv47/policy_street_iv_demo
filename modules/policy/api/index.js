const express = require('express');
const app = express();
const router = express.Router();

router.use('/policies', require('./policy'));
router.use('/clients', require('./client'));
app.use(router);

// the catch all route
app.all('*', (req, res) => {
  res.status(404).send({ msg: 'not found' });
});

module.exports = app;
