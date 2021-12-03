const express = require('express');
const { isLoggedIn } = require('./middlewares');

const postController = express.Router();

postController.post('/', isLoggedIn, (req, res, next) => {

});

postController.post('/images', isLoggedIn, (req, res) => {

});

module.exports = postController;