const Job = require("../models/Job.js");
const ApplyJob = require("../models/Appleidjob.js");

exports.getAllJobService = async (filters, quires) => {
  const jobs = await Job.find(filters)
    .skip(quires.skip)
    .limit(quires.limit)
    .select(quires.fields)
    .sort(quires.sortBy);

  const total = await Job.countDocuments(filters);
  const page = Math.ceil(total / quires.limit);

  return { total, page, jobs };
};
exports.createJobService = async (data) => {
  const result = await Job.create(data);
  return result;
};
exports.getJobIdByService = async (id) => {
  const job = await Job.findOne({ _id: id }).populate("manager.id");

  return job;
};
exports.updateJobIdByService = async (id, data) => {
  const result = await Job.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
exports.deleteJobIdByService = async (id) => {
  const result = await Job.deleteOne({ _id: id });
  return result;
};

exports.createApplyJobService = async (data, id) => {
  const email = data.email;
  const findOldApply = await ApplyJob.findOne({ email });

  if (!findOldApply) {
    const job = await Job.findOne({ _id: id });
    const deadline = job.lastDate;
    const currentDate = new Date();

    if (deadline > currentDate) {
      const result = await ApplyJob.create(data);
      const increaseCount = await Job.updateOne(
        { _id: id },
        { $inc: { appliedCount: 1 } },
      );
      return result;
    }
  }
};

exports.getMostPaidJobService = async () => {
  const result = await Job.find().sort({ salary: -1 }).limit(10);
  return result;
};
exports.getMostApplyJobService = async () => {
  const result = await Job.find().sort({ appliedCount: -1 }).limit(5);
  return result;
};
