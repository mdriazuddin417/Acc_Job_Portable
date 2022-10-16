const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

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
            minLowercase: 3,
            minNumbers: 1,
            minUppercase: 1,
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
          return value === this.password;
        },
        message: "Password don't match",
      },
    },

    role: {
      type: String,
      enum: ["candidate", "manager", "admin"],
      default: "candidate",
    },
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least a first name"],
      maxLength: [100, "Name is to large"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a Last name"],
      trim: true,
      minLength: [3, "Name must be at least a last name"],
      maxLength: [100, "Name is to large"],
    },
    contactNumber: {
      type: String,
      validate: [
        validator.isMobilePhone,
        "Please provide a valid contact number",
      ],
    },

    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
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

// userSchema.pre("save", function (next) {
//   const password = this.password;
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//       if (err) throw err;
//       this.password = hash;
//       this.confirmPassword = undefined;
//       next();
//     });
//   });
// });
userSchema.pre("save", function (next) {
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = function (password, userPassword) {
  if (password == userPassword) {
    return true;
  } else {
    return false;
  }
};

userSchema.methods.generateConfirmationToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.confirmationToken = token;
  const date = new Date();
  date.setDate(date.getDate() + 1);
  this.confirmationTokenExpire = date;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
