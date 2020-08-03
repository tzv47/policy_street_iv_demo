const express = require('express');
const app = express();
const policyService = require('../services/policyService');

app.get('', async (req, res) => {
  const policies = await policyService.getAllPolicy();
  res.send(policies);
});

app.post('', async (req, res) => {
  const data = req.body;
  const policies = await policyService.createPolicy(data);
  res.send(policies);
});

app.get('/:id', async (req, res) => {
  const _id = req.params.id;
  const client = await policyService.getPolicyById(_id);
  res.send(client);
});

app.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  await policyService.updatePolicy(_id, data);
  res.send(await policyService.getPolicyById(_id));
});

app.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  await policyService.deletePolicy(_id);
  res.send('Policy deleted');
});

app.get('/client/:clientId', async (req, res) => {
  const clientId = req.params.clientId;
  const policies = await policyService.getClientPolicy(clientId);
  res.send(policies);
});

module.exports = app;
