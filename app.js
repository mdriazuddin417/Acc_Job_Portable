const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jobRouter = require("./routers/v1/job.router");
const userRouter = require("./routers/v1/user.router.js");
const applyRouter = require("./routers/v1/applyjob.router.js");
const managerRouter = require("./routers/v1/manager.router.js");
const candidateRouter = require("./routers/v1/candidate.router.js");

const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/apply", applyRouter);
app.use("/api/v1/candidate", candidateRouter);
app.use("/api/v1/manager", managerRouter);

app.get("/", (req, res) => {
  res.send("Hello Job Candidate and Hiring Manager testing route");
});

module.exports = app;
