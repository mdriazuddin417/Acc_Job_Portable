const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const managerRouter = require("./routers/v1/manager.router");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/manager", managerRouter);

app.get("/", (req, res) => {
  res.send("Hello Job Candidate and Hiring Manager testing route");
});

module.exports = app;
