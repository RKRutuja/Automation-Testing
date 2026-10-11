const express = require("express");

const app = express();

app.use(express.json());

const policies = [
    {
        id: 1,
        name: "Jeevan Labh",
        premium: 15000
    },
    {
        id: 2,
        name: "Jeevan Arogya",
        premium: 12000
    }
];

// GET all policies
app.get("/api/policies", (req, res) => {
    res.status(200).json(policies);
});

// GET policy by id
app.get("/api/policies/:id", (req, res) => {

    const id = Number(req.params.id);

    const policy = policies.find(p => p.id === id);

    if (!policy) {
        return res.status(404).json({
            message: "Policy not found"
        });
    }

    res.status(200).json(policy);
});

app.post("/api/policies", (req, res) => {

    const policy = {
        id: policies.length + 1,
        name: req.body.name,
        premium: req.body.premium
    };

    policies.push(policy);
    res.status(201).json(policy);
});

// PUT update policy
app.put("/api/policies/:id", (req, res) => {

    const id = Number(req.params.id);
    const policy = policies.find(p => p.id === id);
    if (!policy) {
        return res.status(404).json({
            message: "Policy not found"
        });
    }
    policy.name = req.body.name;
    policy.premium = req.body.premium;

    res.status(200).json(policy);
});

// DELETE policy
app.delete("/api/policies/:id", (req, res) => {

    const id = Number(req.params.id);
    const index = policies.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Policy not found"
        });
    }

    policies.splice(index, 1);
    res.status(204).send();
});

module.exports = app;