const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userController = require('./routers/userController');
const db = require("../models");
const PORT = 3088;

const app = express();

db.sequelize.sync();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hello World");
})
app.use("/user", cors(), userController);

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
})
