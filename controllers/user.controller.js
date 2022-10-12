const {
  getAllUserService,
  singUpService,
  LoginService,
  updateUserService,
} = require("../services/user.services.js");

exports.getAllUser = async (req, res, next) => {
  try {
    const result = await getAllUserService();
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
exports.signUp = async (req, res, next) => {
  try {
    const result = await singUpService(req.body);
    res.status(200).json({
      success: true,
      message: "SignUp Successfully complete",
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: "Failed",
      error: error,
    });
  }
};
exports.Login = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await LoginService(id);
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
exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateUserService(id, req.body);
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
