const Manager = require("../models/Manager");
const ApplyJob = require("../models/Appleidjob");

exports.getAllApplyJobService = async () => {
  const result = await ApplyJob.find({});
  return result;
};
exports.getManagerService = async () => {
  const result = await Manager.find({});
  return result;
};
exports.getApplyJobByIdService = async (id) => {
  const result = await ApplyJob.findOne({ _id: id }).populate("candidate.id");

  return result;
};
exports.createManagerService = async (data) => {
  const result = await Manager.create(data);
  return result;
};
