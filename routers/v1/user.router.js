const express = require("express");
const jobController = require("../../controllers/job.controller.js");
const router = express.Router();

router.route("/").get(jobController.getAllJobs);
router.route("/:id").get(jobController.getJobById);

module.exports = router;
