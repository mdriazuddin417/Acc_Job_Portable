const {
  getAllCandidateService,
  getCandidateByIdService,
  createCandidateService,
} = require("../services/candidate.services");

exports.getAllCandidate = async (req, res, next) => {
  try {
    const result = await getAllCandidateService();
    res.status(200).json({
      data: result,
      success: true,
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed",
      error: error,
    });
  }
};
exports.getCandidateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getCandidateByIdService(id);
    res.status(200).json({
      data: result,
      success: true,
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed",
      error: error,
    });
  }
};

exports.createCandidate = async (req, res, next) => {
  try {
    const result = await createCandidateService(req.body);
    res.status(200).json({
      success: true,
      message: "New candidate add success.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed",
      error: error,
    });
  }
};
