const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 4,
            minLowercase: 1,
            minUppercase: 1,
            minNumber: 1,
            minSymbols: 1,
          }),
        message: "Password {VALUE} is not strong enough",
      },
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (value) {
          return value == this.password;
        },
        message: "Password don't match",
      },
    },
    role: {
      type: String,
      default: "candidate",
      enum: ["candidate", "manager", "admin"],
    },
    firstName: {
      type: String,
      required: [true, "please provide a first Name"],
      trim: true,
      minLength: [3, "Name must be at least 3 character"],
      maxLength: [100, "Name is to longer"],
    },
    lastName: {
      type: String,
      required: [true, "please provide a Last Name"],
      trim: true,
      minLength: [3, "Name must be at least 3 character"],
      maxLength: [100, "Name is to longer"],
    },
    contactNumber: {
      type: String,
      validate: [
        validator.isMobilePhone,
        "Please provide a valid contact number",
      ],
    },
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Provide a valid URL"],
    },
    presentAddress: {
      type: String,
    },
    permanentAddress: {
      type: String,
    },

    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive", "blocked"],
    },
    confirmationToken: String,
    confirmationTokenExpire: Date,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: Date,
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
