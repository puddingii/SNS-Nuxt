const express = require('express');
const db = require('../../models')

const userController = express.Router();

userController.post('/', async(req, res) => {
  try{
    const { 
      body: { email, nickname, password }
    } = req;
    console.log(email, nickname, password)
    const newUser = await db.User.create({ email, nickname, password });

    return res.send(201).json(newUser);
  } catch(e) {
    console.log(e);
    return res.sendStatus(400);
  }
});

module.exports = userController;