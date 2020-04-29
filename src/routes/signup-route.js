const express = require('express');
var router = express.Router(); //interceptação das rotas
const userController = require('../controllers/user-controller');

//Post
router.post("/", userController.userRegister);

module.exports = router;