const express = require("express");
const router = express.Router();
const {
  createVargikrn,
  getAllVrgikrn,
  addProperty,
  deleteVargikrn,
} = require("../controller/vargikrnCntrl");

router.post("/", createVargikrn);
router.post("/addinfo", addProperty);
router.get("/", getAllVrgikrn);
router.delete("/:id", deleteVargikrn);

module.exports = router;
