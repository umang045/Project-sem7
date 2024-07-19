const express = require("express");
const http = require('http')
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const dbConnection = require("./config/dbConnection");

dbConnection();

app.listen(PORT, (err) => {
    if (err) {
      console.error("Server error:", err);
      process.exit(1); // Exit the process with an error code
    } else {
      console.log(`Server running on ${PORT}`);
    }
  });
  