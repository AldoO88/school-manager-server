const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name:{
      type: String,
      required: [true, "the name is required."],
      trim: true
    },
    lastName:{
      type: String,
      required: [true, "the last name is required."],
      trim: true
    },
    profile:{
      type: String,
      require: [true, "the profile is required."],
      enum: ['Director', 'Subditector', 'Docente', 'Coordinador']
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
