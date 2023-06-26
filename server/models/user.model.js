const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
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
      required: [true, "{PATH} is required."],
    },
    email: {
      type: String,
      required: [true, "{PATH} is required."],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid {PATH}",
      }
    },
    password: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [8, "{PATH} must be at least {MINLENGTH} characters."],
    },
  },
  { timestamps: true } // adds createdAt and updatedAt.
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

UserSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});
/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const User = mongoose.model("User", UserSchema);

// You can export this in an object like so or directly since it's we only have one thing to export.
// However, always exporting an object makes it easier to add more exports later (just add another key) and code that
// imports won't be broken by that change.

module.exports = { User: User };
