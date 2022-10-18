const express = require("express");
const candidateController = require("../../controllers/candidate.controller.js");
const authorization = require("../../middleware/authorization.js");
const verifyToken = require("../../middleware/verifyToken.js");
const router = express.Router();

router
  .route("/")
  .get(verifyToken, authorization("admin"), candidateController.getAllCandidate)
  .post(candidateController.createCandidate);

router
  .route("/:id")
  .get(
    verifyToken,
    authorization("admin"),
    candidateController.getCandidateById,
  );

module.exports = router;
