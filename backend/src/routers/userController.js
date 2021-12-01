const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../../models')

const userController = express.Router();

userController.post('/', async(req, res, next) => {
  try{
    const { 
      body: { email, nickname, password }
    } = req;
    const existedUser = db.User.findOne({ where: { email }});
    if(existedUser) {
      return res.status(403).json({ 
        errorCode: 1, 
        message: '이미 있는 유저입니다.'
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({ email, nickname, password: hashedPassword });

    return res.status(201).json(newUser);
  } catch(e) {
    console.log(e);
    return next(e);
  }
});

module.exports = userController;