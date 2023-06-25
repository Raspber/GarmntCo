const { User } = require('../models/user.model');

const handleCreateUser = async (req, res) => {
    console.log('controller: handleCreateUser', req.body);

    try {
        // User.create will take the data and translate it into the appropriate DB query language for us.
        const user = await User.create(req.body);

        return res.json(user);
    } catch (error) {
        // Using a .status http failure code means the .catch on the front end will be triggered
        return res.status(400).json({ ...error, message: error.message });
    }
};

const handleGetAllUsers = async (req, res) => {
    console.log('controller: handleGetAllUsers');

    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};

const handleGetUserById = async (req, res) => {
    console.log('controller: handleGetUserById', req.params);

    try {
        const user = await User.findById(req.params.id);
        return res.json(user);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};

const handleUpdateUserById = async (req, res) => {
    console.log('controller: handleUpdateUserById', req.params, req.body);

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
    console.log('controller: handleDeleteUserById', req.params);

    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.json(user);
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message });
    }
};

module.exports = {

    // shorthand when the key name matches the value name:
    handleCreateUser,
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
};