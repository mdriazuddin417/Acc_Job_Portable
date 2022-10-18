module.exports = (...role) => {
  return (req, res, next) => {
    console.log(req.user);
    const userRole = req.user.role;
    if (!role.includes(userRole)) {
      return res.status(403).json({
        status: "Failed",
        error: "You are not authorized to access this",
      });
    }
    next();
  };
};
