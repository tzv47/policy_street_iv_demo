const axios = require('axios');

const all = async (url, filters = {}) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw 'Bad Request';
  }
};

const getOne = async (url, id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error) {
    throw 'Bad Request';
  }
};

const post = async (url, requestData) => {
  try {
    const { data } = await axios.post(url, requestData);
    return data;
  } catch (error) {
    throw 'Bad Request';
  }
};

const put = async (url, id, requestData) => {
  try {
    const { data } = await axios.put(`${url}/${id}`, requestData);
    return data;
  } catch (error) {
    throw 'Bad Request';
  }
};

const deleteOne = async (url, id) => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    return data;
  } catch (error) {
    throw 'Bad Request';
  }
};

module.exports = {
  all,
  getOne,
  put,
  post,
  deleteOne,
};
