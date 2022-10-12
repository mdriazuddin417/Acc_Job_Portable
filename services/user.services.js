const User = require("../models/User.js");

exports.getAllUserService = async () => {
  const users = await User.find({});
  return users;
};
exports.singUpService = async (data) => {
  const result = await User.create(data);
  return result;
};
exports.LoginService = async (id) => {
  const job = await User.findOne({ _id: id });
  return job;
};
exports.updateUserService = async (id, data) => {
  const result = await User.updateOne({ _id: id }, data);
  return result;
};
exports.deleteUser = async (id) => {
  const result = await User.deleteOne({ _id: id });
  return result;
};
