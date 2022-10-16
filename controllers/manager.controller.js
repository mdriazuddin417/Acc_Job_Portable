const {
  getAllApplyJobService,
  createManagerService,
  getManagerService,
  getApplyJobByIdService,
} = require("../services/manager.services");

exports.getApplyJobs = async (req, res, next) => {
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
exports.createManager = async (req, res, next) => {
  try {
    const result = await createManagerService(req.body);
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
exports.getApplyJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getApplyJobByIdService(id);
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
exports.getManager = async (req, res, next) => {
  try {
    const result = await getManagerService();
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
