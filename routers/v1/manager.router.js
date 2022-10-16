const express = require("express");
const managerController = require("../../controllers/manager.controller.js");
const router = express.Router();

router.route("/jobs").get(managerController.getApplyJobs);
router.route("/jobs/:id").get(managerController.getApplyJobById);
router
  .route("/")
  .get(managerController.getManager)
  .post(managerController.createManager);
module.exports = router;
