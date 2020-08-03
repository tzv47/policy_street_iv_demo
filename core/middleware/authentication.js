const _ = require('lodash');
const jwt = require('jsonwebtoken');

// Whitelist routes that does not need authentication
function filterRequest(req, res, next) {
  const whiteList = ['/login'];

  // If the user already logs in, move on
  const user = _.get(req, 'session.passport.user');

  const authorizationHeader = req.headers['authorization'];
  let token = null;
  if (authorizationHeader) {
    let authValues = authorizationHeader.split(' ');
    if (authValues[0] === 'Bearer') {
      token = authValues[1];
    }
  }

  if (token) {
    if (
      token ===
      'this-is-a-long-key-that-needs-to-be-replaced-with-something-random-later'
    ) {
      next();
    } else {
      jwt.verify(
        token,
        'this-is-a-long-key-that-needs-to-be-replaced-with-something-random-later',
        (err, authData) => {
          if (err) {
            console.error('error in verifying token');
            res.status(501).send('Unauthorized user');
          } else {
            next();
          }
        }
      );
    }
  } else if (user) {
    next();
  } else {
    const urlPath = req.originalUrl.split('?')[0];
    // If the user is not logged in, check if the route is in whitelist
    if (_.includes(whiteList, urlPath)) {
      next();
    } else {
      // Not logged in user trying to access
      // protected route will get 501
      res.status(501).send('Unauthorized user');
    }
  }
}

module.exports = {
  filterRequest,
};
