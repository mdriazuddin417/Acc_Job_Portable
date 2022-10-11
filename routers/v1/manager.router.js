const express = require("express");
const managerController = require("../../controllers/manager.controller");
const router = express.Router();

router.route("/jobs").get(managerController.getAllJobs);
router.route("/jobs/:id").get(managerController.getJobById);

module.exports = router;
