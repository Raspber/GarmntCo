const { User } = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const handleRegister = async (req, res) => {
  try {
    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email: req.body.email });

    // If the user already exists, return an error
    if (existingUser) {
      return res.status(400).json({ message: "Email Is Already Being Used." });
    }

    // If the user does not exist, create a new user
    const user = await User.create(req.body);

    const userToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: "10h" })

    res.cookie("userToken", userToken, { httpOnly: true })

    return res.json(user);
  } catch (error) {
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
    //To set the cookie in the response
    req.cookie("token", token, { httpOnly: true })
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
