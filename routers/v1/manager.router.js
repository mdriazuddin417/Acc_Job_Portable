const express = require("express");
const managerController = require("../../controllers/manager.controller.js");
const authorization = require("../../middleware/authorization.js");
const verifyToken = require("../../middleware/verifyToken.js");
const router = express.Router();

router
  .route("/jobs")
  .get(verifyToken, authorization("manager"), managerController.getApplyJobs);

router
  .route("/jobs/:id")
  .get(
    verifyToken,
    authorization("manager"),
    managerController.getApplyJobById,
  );
router
  .route("/")
  .get(verifyToken, authorization("admin"), managerController.getManager)
  .post(managerController.createManager);
module.exports = router;
