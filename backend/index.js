const express = require("express");
const http = require('http')
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const dbConnection = require("./config/dbConnection");


const propertyRoute = require('./routes/propertyRoute')

dbConnection();
app.use(express.json());
app.use('/api/property',propertyRoute)

app.listen(PORT, (err) => {
    if (err) {
      console.error("Server error:", err);
      process.exit(1); 
    } else {
      console.log(`Server running on ${PORT}`);
    }
  });
  