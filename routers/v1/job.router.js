const express = require("express");
const jobController = require("../../controllers/job.controller.js");
const authorization = require("../../middleware/authorization.js");
const verifyToken = require("../../middleware/verifyToken.js");
const router = express.Router();

router
  .route("/")
  .get(verifyToken, jobController.getAllJobs)
  .post(verifyToken, authorization("manager"), jobController.createJob);

router
  .route("/:id")
  .get(jobController.getJobById)
  .patch(verifyToken, authorization("manager"), jobController.updateJobById);

module.exports = router;
