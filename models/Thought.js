const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    stype: String,
    required: true,
    min: 1,
    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //use getter method to format the timestamp on query
  },
});
