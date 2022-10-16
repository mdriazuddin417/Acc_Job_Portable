const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const appliedJobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minLength: [3, "Provide a at least 3 character"],
      maxLength: [100, "Name is to large"],
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: [true, "Please Provide your name"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
    },
    companyName: {
      type: String,
      required: [true, "Please Provide a company name"],
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    resumeLink: {
      type: String,
      validate: [validator.isURL, "Provide a Resume Link"],
    },
    salary: {
      type: Number,
      required: [true, "salary must be required"],
    },

    job: {
      id: {
        type: ObjectId,
        required: true,
        ref: "Job",
      },
    },
    manager: {
      name: String,
      id: {
        type: ObjectId,
        required: true,
        ref: "Manager",
      },
    },
    user: {
      id: {
        type: ObjectId,
        required: true,
        ref: "User",
      },
    },
  },
  { timestamps: true },
);

const AppliedJob = mongoose.model("Appleidjob", appliedJobSchema);

module.exports = AppliedJob;
