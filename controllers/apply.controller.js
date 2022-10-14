const {
  getAllApplyJobService,
  createApplyJobService,
  getApplyJobIdByService,
  updateApplyJobIdByService,
} = require("../services/applied.services.js");

exports.getAllApplyJobs = async (req, res, next) => {
  try {
    const result = await getAllApplyJobService();
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

exports.getApplyJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getApplyJobIdByService(id);
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
