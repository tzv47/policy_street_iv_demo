const express = require('express');
const app = express();
const clientService = require('../services/clientService');

app.get('', async (req, res) => {
  const clients = await clientService.getAllClient();
  res.send(clients);
});

app.post('', async (req, res) => {
  const data = req.body;
  const clients = await clientService.createClient(data);
  res.send(clients);
});

app.get('/:id', async (req, res) => {
  const _id = req.params.id;
  const client = await clientService.getClientById(_id);
  res.send(client);
});

app.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  await clientService.updateClient(_id, data);
  res.send(await clientService.getClientById(_id));
});

app.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  await clientService.deleteClient(_id);
  res.send('Client deleted');
});

module.exports = app;
