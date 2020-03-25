const express = require('express');
const getDb = require('../database/bootstrap.database');

const productsRouter = express.Router();

productsRouter.get('/:id', (req, res) => {
    const db = getDb();
    const id = req.params.id;
    db.products.find({ id: id }).then((results) => res.status(200).send(results)).catch(err => res.send(err));
});

productsRouter.post('/create', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    const { name, description, price } = req.body;
    db.products.insert({ name, description, price }).then(() => res.status(200).send()).catch(err => res.send(err));

});

productsRouter.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const { name, description, price } = req.body;
    const db = getDb();
    db.products.save({ id, name, description, price }).then(() => res.status(200).send()).catch(err => res.send(err));
});

productsRouter.delete('/delete/:id', (req, res) => {
    const db = getDb();
    db.products.destroy(req.params.id).then(() => res.status(200).send())
        .catch(err => res.send(err))
});

module.exports = productsRouter;