const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema (
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: String,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: String,
        ref: 'User'
      }
    ]
  }
)

userNameSchema.virtual('friendCount').get(function() {
  return this.replies.length;
});

const userName = model('userName', userNameSchema);

module.exports = userName;