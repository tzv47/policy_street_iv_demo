const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const cookieSession = require('cookie-session');
const _ = require('lodash');
const LocalStrategy = require('passport-local');
const port = require('./config').port;
const userService = require('./services/userService');
const authMiddleware = require('./middleware/authentication');

const api = require('./api');

app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(authMiddleware.filterRequest);
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
  const user = await userService.getUserById(userId);

  if (!user) {
    return done(null, false);
  }

  done(null, user);
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      session: false,
    },
    async (emailIn, passwordIn, done) => {
      const _user = await userService.getUserByEmail(emailIn);
      if (!_user) {
        done(null, false);
      } else {
        bcrypt.compare(passwordIn, _user.password, (errno, result) => {
          if (errno) done(errno);
          if (!result) done(null, false);

          const user = JSON.parse(JSON.stringify(_user));

          const token = jwt.sign(
            {
              _id: user._id,
              email: user.email,
            },
            'this-is-a-long-key-that-needs-to-be-replaced-with-something-random-later',
            { expiresIn: '24h' }
          );
          user.token = token;
          done(null, user);
        });
      }
    }
  )
);

// initialize passport

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [
      'this-is-a-long-key-that-needs-to-be-replaced-with-something-random-later',
    ],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(api);

server.listen(port, () => {
  console.log('Server Started at : ' + port);
});
