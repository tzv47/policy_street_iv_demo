const User = require('../models/user');

const getAllUser = async () => {
  return User.find();
};

const getUserById = async (_id) => {
  return User.findById(_id);
};

const getUserByEmail = (email) => {
  return User.findOne({ email });
};

const createUser = (data) => {
  const user = new User(data);
  return user.save();
};

const updateUser = (_id, user) => {
  return User.updateOne({ _id }, user);
};

const deleteUser = (_id) => {
  return User.deleteOne({ _id });
};

module.exports = {
  getAllUser,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
