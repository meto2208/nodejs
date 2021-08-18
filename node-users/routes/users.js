const express = require('express');
const router = express.Router();
const User = require('../models/user')

router
  .get('/', async (req, res) => {
    const users = await User.find();
    res.render('users', { users: users });
  })
  .get('/create-user', (req, res) => {
    res.render('create-user')
  })
  .get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    res.render('update-user', { user: user })
  })
  .post('/create-user', async (req, res) => {
    try {
      await User.create(req.body);

      res.redirect('/users');
    } catch (error) {
      res.send(error)
      throw error
    }
  })
  .post('/:id', async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, req.body);

      res.redirect('/users');
    } catch (error) {
      res.send(error)
      throw error
    }
  })
module.exports = router;
