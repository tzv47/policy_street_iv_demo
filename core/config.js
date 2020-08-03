module.exports = {
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'demo',
  URL_MONGODB: process.env.URL_MONGODB || 'mongodb://mongodb:27017/',
  port: 8081,
  policyUrl: 'http://policy:8082/',
};
