const express = require("express");
const applyJobController = require("../../controllers/apply.controller.js");
const authorization = require("../../middleware/authorization.js");
const verifyToken = require("../../middleware/verifyToken.js");
const router = express.Router();

router
  .route("/")
  .get(
    verifyToken,
    authorization("manager"),
    applyJobController.getAllApplyJobs,
  );

router.route("/:id").get(applyJobController.getApplyJobById);

module.exports = router;
