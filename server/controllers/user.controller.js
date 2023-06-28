const { User } = require("../models/user.model");
const bcrypt = require('bcryptjs');

// Handles user registration
const handleRegister = async (req, res) => {
  console.log("this is the register server side" , req.body)
  try {
    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email: req.body.email });

    // If the user already exists, return an error
    if (existingUser) {
      return res.status(400).json({ message: "Email Is Already Being Used." });
    }

    // If the user does not exist, create a new user
    const user = await User.create(req.body);

    // Store the user's ID in the session
    req.session.userId = user._id;
    
    // Return the user data
    return res.json({user});
  } catch (error) {
    // Return an error message
    return res.status(400).json({ ...error, message: error.message });
  }
};

// Handles user login
const handleLogin = async (req, res) => {
  
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If the user does not exist, return an error
    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    // Check if the provided password matches the stored password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is invalid, return an error
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    // Store the user's ID in the session
    req.session.userId = user._id;

    // Return the user data
    return res.json({ user });
  } catch (error) {
    // Return an error message
    return res.status(400).json({ message: error.message });
  }
};

// Handles fetching the currently logged in user
const handleLoggedUser = async (req, res) => {
  console.log("handleLogged user", req.body)
  try {
    // Get the user by ID from the session
    const user = await User.findById(req.session.userId);

    // If the user does not exist, return an error
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Return the user data
    return res.json(user);
  } catch (error) {
    // Return an error message
    return res.status(400).json({ ...error, message: error.message });
  }
};

// Handles user logout
const handleLogout = (req, res) => {
  console.log('hello' ,req.session)
  req.session.destroy((err) => {
    if (err) {
      return res.status(401).json({ message: "Could not log out, please try again later." });
    } else {
      return res.json({ message: "Successfully logged out." });
    }
  
  });
};

const authenticate = (req, res, next) => {
  if (req.session.userId) {
    // User is authenticated
    next();
  } else {
    // User is not authenticated
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  authenticate,
  handleRegister,
  handleLogin,
  handleLoggedUser,
  handleLogout
};