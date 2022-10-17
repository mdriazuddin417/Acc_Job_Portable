const express = require("express");
const candidateController = require("../../controllers/candidate.controller.js");
const router = express.Router();

router
  .route("/")
  .get(candidateController.getAllCandidate)
  .post(candidateController.createCandidate);

router.route("/:id").get(candidateController.getCandidateById);

module.exports = router;
