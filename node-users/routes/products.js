const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router
      .get('/', async (req, res) => {
        const products = await Product.find();

        res.render('products', { products: products });
      })
      .get('/:id', async (req, res) => {
        const product = await Product.findById(req.params.id);

        res.render('update', { product: product })
      })
      .get('/create', (req, res) => {
        res.render('create')
      })
      .post('/create', async (req, res) => {
        try {
          await Product.create(req.body);

          res.redirect('/products');
        } catch (error) {
          res.send(error)
          throw error
        }
      })
      .post('/:id', async (req, res) => {
        try {
          await Product.findByIdAndUpdate(req.params.id, req.body);

          res.redirect('/products');
        } catch (error) {
          res.send(error)
          throw error
        }
      })

module.exports = router;