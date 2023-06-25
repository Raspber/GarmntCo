const mongoose = require("mongoose");
/* 
{PATH} will be replaced with the field name, such as "location".
*/
const UserSchema = new mongoose.Schema(
    {
    firstName: {
        type: String,
        required: [true, "{PATH} is required."],

    },
    lastName: {
        type: String,
        required: [true, "{PATH} is required."]
    },
    email:{
        type: String,
        required: [true, "{PATH} is required."]
    }},
    {timestamps: true} // adds createdAt and updatedAt.
    );

    /* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const User = mongoose.model("User", UserSchema);
// You can export this in an object like so or directly since it's we only have one thing to export.
// However, always exporting an object makes it easier to add more exports later (just add another key) and code that
// imports won't be broken by that change.
module.exports = {User: User};