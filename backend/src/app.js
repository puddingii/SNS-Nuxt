const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userController = require('./routers/userController');
const db = require("../models");
const PORT = 3088;
var corsOptions = {
  origin: [/localhost:3000/]
}

const app = express();

db.sequelize.sync();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hello World");
})
app.use("/user", userController);

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
})
