const Policy = require('../models/policy');

// TODO: Create filter
const getAllPolicy = async () => {
  return Policy.find({});
};

const getPolicyById = async (_id) => {
  return Policy.findById(_id);
};

const getClientPolicy = async (clientId) => {
  return Policy.find({ clientId });
};

const createPolicy = async (data) => {
  const policy = new Policy(data);
  return policy.save();
};

const updatePolicy = async (data, _id) => {
  return Policy.replaceOne({ _id }, data);
};

const deletePolicy = async (_id) => {
  return Policy.deleteMany({ _id });
};

module.exports = {
  getAllPolicy,
  getPolicyById,
  createPolicy,
  updatePolicy,
  deletePolicy,
  getClientPolicy,
};
