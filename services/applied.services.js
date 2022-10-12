const Appleidjob = require("../models/Appleidjob.js");

exports.getAllApplyJobService = async () => {
  const jobs = await Appleidjob.find({});
  return jobs;
};
exports.createApplyJobService = async (data) => {
  const result = await Appleidjob.create(data);
  return result;
};
exports.getApplyJobIdByService = async (id) => {
  const job = await Appleidjob.findOne({ _id: id });
  return job;
};
