const { User } = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const handleRegister = async (req, res) => {
  console.log("controller: handleCreateUser", req.body);

  try {
    // Destination.create will take the data and translate it into the appropriate DB query language for us.
    const user = await User.create(req.body);

    return res.json(user);
  } catch (error) {
    // Using a .status http failure code means the .catch on the front end will be triggered
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "10h",
    });
    return res.json({ token, user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const handleGetAllUsers = async (req, res) => {

  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleGetUserById = async (req, res) => {
  console.log("controller: handleGetUserById", req.params);

  try {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleUpdateUserById = async (req, res) => {
  console.log("controller: handleUpdateUserById", req.params, req.body);

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      // Re-run validations
      runValidators: true,
      // Return the updated user
      new: true,
    });
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleDeleteUserById = async (req, res) => {
  console.log("controller: handleDeleteUserById", req.params);

  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

module.exports = {
  // shorthand when the key name matches the value name:
  handleRegister,
  handleLogin,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
