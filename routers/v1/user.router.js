const express = require("express");
const userController = require("../../controllers/user.controller.js");
const verifyToken = require("../../middleware/verifyToken.js");
const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.get("/me", verifyToken, userController.getMe);
router.get("/:id", userController.updateUser);

module.exports = router;
