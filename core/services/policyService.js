const httpClient = require('../shared/http-client');
const { policyUrl } = require('../config');
const mainUrl = `${policyUrl}policies`;

const getAllPolicies = async () => {
  return httpClient.all(mainUrl);
};

const getPolicyById = async (id) => {
  return httpClient.getOne(mainUrl, id);
};

const createPolicy = async (data) => {
  return httpClient.post(mainUrl, data);
};

const updatePolicy = async (id, data) => {
  return httpClient.put(mainUrl, id, data);
};

const deletePolicy = async (id) => {
  return httpClient.deleteOne(mainUrl, id);
};

module.exports = {
  getAllPolicies,
  getPolicyById,
  createPolicy,
  updatePolicy,
  deletePolicy,
};
