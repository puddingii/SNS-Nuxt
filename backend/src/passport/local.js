const passport = require('passport');
const bcrypt = require('bcrypt');
const { Strategy: LocalStrategy } = require('passport-local');
const db = require('../../models');

module.exports = () => {
  passport.use(new LocalStrategy({ 
    usernameField: 'email', 
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
      const existedUser = await db.User.findOne({ where: { email } });
      if(!existedUser) {
        return done(null, false, { reason: '존재하지 않는 사용자입니다.' });
      }
      const isCorrectPassword = await bcrypt.compare(password, existedUser.password);
      if(isCorrectPassword) {
        return done(null, existedUser);
      } else {
        return done(null, false, { reason: '비밀번호가 틀립니다.' });
      }
    } catch(e) {
      console.error(e);
      return done(e);
    }
  }))
}