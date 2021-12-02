const express = require('express');

const postController = express.Router();

postController.post('/', (req, res, next) => {
  if(req.isAuthenticated()) {
    
  }
});

module.exports = postController;