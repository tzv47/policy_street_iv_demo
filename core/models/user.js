const MONGO_DATABASE = require('../config').MONGO_DATABASE;
const URL_MONGODB = require('../config').URL_MONGODB;
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

mongoose.connect(`${URL_MONGODB}${MONGO_DATABASE}`);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const userSchema = new Schema({
  email: { type: String, index: true, unique: true },
  password: String,
});

module.exports = mongoose.model('Users', userSchema);
