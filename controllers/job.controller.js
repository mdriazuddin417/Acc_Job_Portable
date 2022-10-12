const {
  getAllJobService,
  createJobService,
  getJobIdByService,
  updateJobIdByService,
} = require("../services/job.services");

exports.getAllJobs = async (req, res, next) => {
  try {
    const result = await getAllJobService();
    res.status(200).json({
      data: result,
      success: true,
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "Failed",
      error: error,
    });
  }
};
exports.createJob = async (req, res, next) => {
  try {
    const result = await createJobService(req.body);
    res.status(200).json({
      success: true,
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "Failed",
      error: error,
    });
  }
};
exports.getJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getJobIdByService(id);
    res.status(200).json({
      data: result,
      success: true,
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "Failed",
      error: error,
    });
  }
};
exports.updateJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateJobIdByService(id, req.body);
    res.status(200).json({
      data: result,
      success: true,
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "Failed",
      error: error,
    });
  }
};

exports.applyJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateJobIdByService(id, req.body);
    res.status(200).json({
      data: result,
      success: true,
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "Failed",
      error: error,
    });
  }
};
