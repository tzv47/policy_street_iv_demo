const MONGO_DATABASE = require('../config').MONGO_DATABASE;
const URL_MONGODB = require('../config').URL_MONGODB;
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

mongoose.connect(`${URL_MONGODB}${MONGO_DATABASE}`);

const clientTypeEnum = {
  Company: 'company',
  Individual: 'individual',
};

const riskTypeEnum = {
  Low: 'low',
  Medium: 'medium',
  High: 'high',
};

const clientSchema = new Schema({
  clientType: { type: clientTypeEnum, required: true },
  name: String,
  address: String,
  riskType: { type: riskTypeEnum },
});

module.exports = mongoose.model('Client', clientSchema);
