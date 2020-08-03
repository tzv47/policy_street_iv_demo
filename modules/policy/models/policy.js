const MONGO_DATABASE = require('../config').MONGO_DATABASE;
const URL_MONGODB = require('../config').URL_MONGODB;
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

mongoose.connect(`${URL_MONGODB}${MONGO_DATABASE}`);

const policyTypeEnum = {
  Motor: 'motor',
  Motorcycle: 'motorcycle',
  Home: 'home',
  Life: 'life',
  Medical: 'medical',
};

const policySchema = new Schema({
  policyType: { type: policyTypeEnum, required: true },
  client: {
    type: mongoose.ObjectId,
    required: true,
    index: true,
  },
  startDate: Date,
  expiredOn: Date,
});

module.exports = mongoose.model('Policy', policySchema);
