const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      Trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, "Please input a valid email address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

//need to create virtual called 'friendCount' - this will retrieve the length of the user's friends array field on query.

const User = model("user", userSchema);

module.exports = User;
