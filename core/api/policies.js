const express = require('express');
const app = express();
const policyService = require('../services/policyService');

app.get('', async (req, res) => {
  const policies = await policyService.getAllPolicies();
  res.send(policies);
});

app.post('', async (req, res) => {
  console.log(req.body);
  const policies = await policyService.createPolicy(req.body);
  res.send(policies);
});

app.get('/:id', async (req, res) => {
  const policies = await policyService.getPolicyById(req.params.id);
  res.send(policies);
});

app.put('/:id', async (req, res) => {
  const policies = await policyService.updatePolicy(req.params.id, req.body);
  res.send(policies);
});

app.delete('/:id', async (req, res) => {
  const policies = await policyService.deletePolicy(req.params.id);
  res.send(policies);
});

module.exports = app;
