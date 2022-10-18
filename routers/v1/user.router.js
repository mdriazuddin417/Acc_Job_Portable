const express = require("express");
const userController = require("../../controllers/user.controller.js");
const authorization = require("../../middleware/authorization.js");
const verifyToken = require("../../middleware/verifyToken.js");
const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.get("/me", verifyToken, userController.getMe);
router.patch(
  "/:id",
  verifyToken,
  authorization("admin"),
  userController.updateUser,
);
router.get("/", authorization("admin"), userController.getAllUser);

module.exports = router;
