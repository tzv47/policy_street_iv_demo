const httpClient = require('../shared/http-client');
const { policyUrl } = require('../config');
const mainUrl = `${policyUrl}clients`;

const getAllClients = async () => {
  return httpClient.all(mainUrl);
};

const getClientById = async (id) => {
  return httpClient.getOne(mainUrl, id);
};

const createClient = async (data) => {
  return httpClient.post(mainUrl, data);
};

const updateClient = async (id, data) => {
  return httpClient.put(mainUrl, id, data);
};

const deleteClient = async (id) => {
  return httpClient.deleteOne(mainUrl, id);
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
