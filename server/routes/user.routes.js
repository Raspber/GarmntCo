const express = require('express');

const {
  handleRegister,
  handleLogin,
  handleLoggedUser,
  handleLogout,
  authenticate
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/authenticate', authenticate);
router.post('/register', handleRegister);
router.post('/login', handleLogin);
router.post('/logout', handleLogout);
router.get('/dashboard', handleLoggedUser)

module.exports = {
  userRouter: router,
};