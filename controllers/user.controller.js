const {
  getAllUserService,
  singUpService,
  findUserByEmail,
  findUserByToken,
  updateUserService,
} = require("../services/user.services.js");

const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");
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
    const user = await singUpService(req.body);

    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      message: "SignUp Successfully complete",
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      error: "Couldn't create the user",
      error: error,
    });
  }
};
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "failed",
        error: "Please provide your valid details",
      });
    }
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        status: "failed",
        error: "No user found. Please create an account",
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "failed",
        error: "Password is not correct",
      });
    }
    if (user.status != "active") {
      return res.status(401).json({
        status: "failed",
        error: "Your account is not active yet",
      });
    }

    const token = generateToken(user);
    const { password: pwt, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully Login",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: "Couldn't create the user",
      error: error,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await findUserByEmail(req.user?.email);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: "Couldn't find you",
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
