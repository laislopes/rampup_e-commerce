const express = require('express');
const routes = express.Router();

const ProductController = require('../controllers/ProductController');

routes.get('/api/products', ProductController.get);
routes.post('/api/products', ProductController.post);

module.exports = routes;
