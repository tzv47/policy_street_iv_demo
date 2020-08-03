const express = require('express');
const app = express();
const userService = require('../services/userService');

app.get('', async (req, res) => {
  const users = await userService.getAllUser();
  res.send(users);
});

app.post('', async (req, res) => {
  const data = req.body;
  const isUserExist = await userService.getUserByEmail(data.email);
  if (isUserExist) {
    res.status(400).send('User with this email already exist');
    return;
  }
  const users = await userService.createUser(data);
  res.send(users);
});

app.get('/:id', async (req, res) => {
  const _id = req.params.id;
  const users = await userService.getUserById(_id);
  res.send(users);
});

app.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  await userService.updateUser(_id, data);
  res.send(await userService.getUserById(_id));
});

app.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  await userService.deleteUser(_id);
  res.send('User deleted');
});

module.exports = app;
