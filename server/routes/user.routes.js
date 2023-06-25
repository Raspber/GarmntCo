const express = require('express');

const {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require('../controllers/user.controller');

const router = express.Router();

// In the server.js the prefix /users will be added to this url
// Notice handleCreateUser is not called now, it's a callback, it will be called later, when the route is visited
router.post('/', handleCreateUser);
router.get('/', handleGetAllUsers);
router.get('/:id', handleGetUserById);
router.put('/:id', handleUpdateUserById);
router.delete('/:id', handleDeleteUserById);

module.exports = {
  userRouter: router,
};
