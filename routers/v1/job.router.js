const express = require("express");
const jobController = require("../../controllers/job.controller.js");
const router = express.Router();

router.route("/").get(jobController.getAllJobs).post(jobController.createJob);

router
  .route("/:id")
  .get(jobController.getJobById)
  .patch(jobController.updateJobById);

module.exports = router;
