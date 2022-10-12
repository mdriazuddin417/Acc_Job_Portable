const express = require("express");
const applyJobController = require("../../controllers/apply.controller.js");
const router = express.Router();

router.route("/").get(applyJobController.getAllApplyJobs);

router
  .route("/:id")
  .get(applyJobController.getApplyJobById)
  .patch(applyJobController.updateJobById);

module.exports = router;
