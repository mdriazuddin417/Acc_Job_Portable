const mongoose = require("mongoose");
const validator = require("validator");

const managerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Provide a at least 3 character"],
      maxLength: [100, "Name is to large"],
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
    },
    phone: {
      type: String,
      validate: [validator.isMobilePhone, "Provide a valid contact number"],
    },
    companyName: {
      type: String,
      required: [true, "Please Provide a company name"],
    },
  },
  { timestamps: true },
);

const Manager = mongoose.model("Manager", managerSchema);

module.exports = Manager;
