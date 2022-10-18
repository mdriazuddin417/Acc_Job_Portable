const {
  getAllJobService,
  createJobService,
  getJobIdByService,
  updateJobIdByService,
  createApplyJobService,
  getMostPaidJobService,
  getMostApplyJobService,
} = require("../services/job.services");

exports.getAllJobs = async (req, res, next) => {
  try {
    let filters = { ...req.query };

    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);

    //gt, gte,lt,lte
    let filtersString = JSON.stringify(filters);
    filtersString = filtersString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => ` $${match}`,
    );

    filters = JSON.parse(filtersString);

    const quires = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      quires.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      quires.fields = fields;
    }
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      quires.skip = skip;
      quires.limit = parseInt(limit);
    }

    const result = await getAllJobService(filters, quires);
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
exports.createJob = async (req, res, next) => {
  try {
    const result = await createJobService(req.body);
    res.status(200).json({
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
      success: false,
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
      success: false,
      message: "Failed",
      error: error,
    });
  }
};

exports.createApplyJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await createApplyJobService(req.body, id);

    if (!result) {
      res.status(400).json({
        success: false,
        message: "deadline is over",
        error: error,
      });
    }
    res.status(200).json({
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

exports.getMostPaidJob = async (req, res, next) => {
  try {
    const result = await getMostPaidJobService();
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
exports.getMostApplyJob = async (req, res, next) => {
  try {
    const result = await getMostApplyJobService();
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

exports.fileUpload = async (req, res, next) => {
  try {
    res.status(200).json(req.files);
  } catch (error) {
    res.status(400).json({
      message: "Failed",
      error: error,
    });
  }
};
