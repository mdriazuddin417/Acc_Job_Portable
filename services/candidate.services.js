const Candidate = require("../models/Candidate");

exports.getAllCandidateService = async () => {
  const result = await Candidate.find({});
  return result;
};
exports.getCandidateByIdService = async (id) => {
  const result = await Candidate.findOne({ _id: id })
    .populate("user.id")
    .populate("job.id");

  return result;
};
exports.createCandidateService = async (data) => {
  const result = await Candidate.create(data);
  return result;
};
