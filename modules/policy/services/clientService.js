const Client = require('../models/client');

// TODO: Create filter
const getAllClient = async () => {
  return Client.find({});
};

const getClientById = async (_id) => {
  return Client.findById(_id);
};

const createClient = async (data) => {
  const client = new Client(data);
  return client.save();
};

const updateClient = async (data, _id) => {
  return Client.replaceOne({ _id }, data);
};

const deleteClient = async (_id) => {
  return Client.deleteMany({ _id });
};

module.exports = {
  getAllClient,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
