const Job = require("../models/Job.js");
const ApplyJob = require("../models/Appleidjob.js");

exports.getAllJobService = async () => {
  const jobs = await Job.find({});
  return jobs;
};
exports.createJobService = async (data) => {
  const result = await Job.create(data);
  return result;
};
exports.getJobIdByService = async (id) => {
  const job = await Job.findOne({ _id: id });
  return job;
};
exports.updateJobIdByService = async (id, data) => {
  const result = await Job.updateOne({ _id: id }, data);
  return result;
};
exports.deleteJobIdByService = async (id) => {
  const result = await Job.deleteOne({ _id: id });
  return result;
};

exports.createApplyJobService = async (data) => {
  const result = await ApplyJob.create(data);
  return result;
};
