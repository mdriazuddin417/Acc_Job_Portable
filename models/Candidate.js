const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const candidateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Provide a at least 3 character"],
      maxLength: [100, "Name is to large"],
      lowercase: true,
      required: true,
      trim: true,
    },
    presentAddress: {
      type: String,
    },
    permanentAddress: {
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
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Provide a valid URL"],
    },
    resumeLink: {
      type: String,
      validate: [validator.isURL, "Provide a Resume Link"],
    },
    appliedDate: Date,
  },
  { timestamps: true },
);

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
