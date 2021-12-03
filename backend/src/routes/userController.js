const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../../models');
const { isNotLoggedIn, isLoggedIn } = require('./middlewares');

const userController = express.Router();

userController.post('/signUp', isNotLoggedIn, async(req, res, next) => {
  try{
    const { 
      body: { email, nickname, password }
    } = req;
    const existedUser = await db.User.findOne({ where: { email }});
    if(existedUser) {
      return res.status(403).json({ 
        errorCode: 1, 
        message: '이미 있는 유저입니다.'
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.User.create({ email, nickname, password: hashedPassword });

    passport.authenticate('local', (err, user, info) => {
      if(err) {
        console.error(err);
        return next(err);
      } 
      if(info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, (err) => { // 세션에 사용자 정보 저장
        if(err) {
          console.error(err);
          return next(err);
        }
        return res.json(user)
      });
    })(req, res, next);
  } catch(e) {
    console.log(e);
    return next(e);
  }
});

userController.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) {
      console.error(err);
      return next(err);
    } 
    if(info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, (err) => { // 세션에 사용자 정보 저장
      if(err) {
        console.error(err);
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

userController.post('/logout', isLoggedIn, (req, res) => {
  if(req.isAuthenticated()) {
    req.logout();
    return res.status(200).send('로그아웃 되었습니다.');
  }
})

module.exports = userController;