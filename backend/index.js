const express = require("express");
const http = require("http");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const dbConnection = require("./config/dbConnection");

const propertyRoute = require("./routes/kacheriRoute");
const vibhagRoute = require("./routes/vibhagRoute");
const vrgikrnRoute = require("./routes/vargikrnRoute");

dbConnection();
app.use(cors());
app.use(express.json());

app.use("/api/vrgikrn", vrgikrnRoute);
app.use("/api/kacheri", propertyRoute);
app.use("/api/vibhag", vibhagRoute);

app.listen(PORT, "0.0.0.0", (err) => {
  if (err) {
    console.error("Server error:", err);
    process.exit(1);
  } else {
    console.log(`Server running on ${PORT}`);
  }
});
