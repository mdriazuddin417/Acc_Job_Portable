const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 8081;

mongoose
  .connect(process.env.MONGOOSE_LOCAL_DATABASE)
  .then(() => console.log("Mongoose database connected successfully"))
  .catch((error) => console.log("Mongoose database not connected"));

app.listen(port, () => {
  console.log("Example server testing port", port);
});
