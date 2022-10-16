const express = require("express");
const jobController = require("../../controllers/job.controller.js");
const authorization = require("../../middleware/authorization.js");
const uploader = require("../../middleware/uploader.js");
const verifyToken = require("../../middleware/verifyToken.js");
const router = express.Router();

router.route("/top-paid").get(jobController.getMostPaidJob);
router.route("/top-apply").get(jobController.getMostApplyJob);

router.route("/").get(jobController.getAllJobs).post(jobController.createJob);
// .post(authorization("manager"), jobController.createJob);

router
  .route("/:id")
  .get(jobController.getJobById)
  .patch(jobController.updateJobById);
// .patch(authorization("manager"), jobController.updateJobById);
router.route("/:id/apply").post(jobController.createApplyJobById);

module.exports = router;
