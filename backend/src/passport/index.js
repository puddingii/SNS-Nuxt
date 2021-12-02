const passport = require('passport');
const db = require('../../models');
const local = require('./local');

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser( async (id, done) => {  // 로그인 후 모든 요청에 실행된다. db접속을 최소화 해야함.(캐싱을 통해 극복함.)
    try {
      const user = await db.User.findOne({ where: { id }});
      return done(null, user);  // req.user에 넣어주고, req.isAutehnticated()를 true로 만들어줌.
    } catch(e) {
      console.error(e);
      return done(e);
    }
  });
  local();
};