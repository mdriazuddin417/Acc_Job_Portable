const express = require("express");
const jobController = require("../../controllers/job.controller.js");
const authorization = require("../../middleware/authorization.js");
const uploader = require("../../middleware/uploader.js");
const verifyToken = require("../../middleware/verifyToken.js");
const router = express.Router();

router.route("/top-paid").get(jobController.getMostPaidJob);
router.route("/top-apply").get(jobController.getMostApplyJob);

router.post("/file-upload", uploader.array("pdf"), jobController.fileUpload);

router
  .route("/")
  .get(jobController.getAllJobs)
  .post(verifyToken, authorization("manager"), jobController.createJob);

router
  .route("/:id")
  .get(jobController.getJobById)
  .patch(verifyToken, authorization("manager"), jobController.updateJobById);

router.route("/:id/apply").post(verifyToken, jobController.createApplyJobById);

module.exports = router;
