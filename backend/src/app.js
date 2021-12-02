const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie-parser');

const userController = require('./routes/userController');
const postController = require('./routes/postController');
const db = require('../models');
const passportConfig = require('./passport');
const PORT = 3088;
var corsOptions = {
  origin: [/localhost:3000/],
  credentials: true
}

const app = express();

db.sequelize.sync();
passportConfig();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use(session({
  secret:'myNuxtProject',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false
  }
}));
app.use(passport.initialize());  // 요청 응답에 로그인 로그아웃 기능을 만들어줌.
app.use(passport.session());  // 세션 메모리 사용

app.use('/user', userController);
app.use('/post', postController);

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
})
