const express = require("express");
const router = express.Router();
const {
  createVargikrn,
  createVargikaranWithFloors,
  getAllVrgikrn,
  addProperty,
  deleteVargikrn,
  addFloors
} = require("../controller/vargikrnCntrl");

// router.post("/", createVargikrn);
router.post("/", createVargikaranWithFloors);
router.post("/addinfo", addProperty);
router.get("/", getAllVrgikrn);
router.delete("/:id", deleteVargikrn);
router.put("/", addFloors);

module.exports = router;
