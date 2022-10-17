const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minLength: [3, "Provide a at least 3 character"],
      maxLength: [100, "Name is to large"],
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
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
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
    salary: {
      type: Number,
      required: [true, "salary must be required"],
    },
    eduction: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "paid",
      enum: ["paid", "unpaid"],
    },
    lastDate: Date,
    appliedCount: Number,
    manager: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Manager",
        required: true,
      },
    },
  },
  { timestamps: true },
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
