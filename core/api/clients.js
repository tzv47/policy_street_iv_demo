const express = require('express');
const app = express();
const clientService = require('../services/clientService');

app.get('', async (req, res) => {
  const clients = await clientService.getAllClients();
  res.send(clients);
});

app.post('', async (req, res) => {
  console.log(req.body);
  const client = await clientService.createClient(req.body);
  res.send(client);
});

app.get('/:id', async (req, res) => {
  const client = await clientService.getClientById(req.params.id);
  res.send(client);
});

app.put('/:id', async (req, res) => {
  const client = await clientService.updateClient(req.params.id, req.body);
  res.send(client);
});

app.delete('/:id', async (req, res) => {
  const client = await clientService.deleteClient(req.params.id);
  res.send(client);
});

module.exports = app;
