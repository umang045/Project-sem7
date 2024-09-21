const express = require("express");
const router = express.Router();
const {
  createVargikrn,
  createVargikaranWithFloors,
  getAllVrgikrn,
  addProperty,
  deleteVargikrn,
  addFloors,
  getInfoByVibhag,
  getFloors,
} = require("../controller/vargikrnCntrl");

// router.post("/", createVargikrn);
router.post("/", createVargikaranWithFloors);
router.post("/addinfo", addProperty);
router.get("/", getAllVrgikrn);
router.get("/getinfo", getInfoByVibhag);
router.get("/floors/:vibhagId", getFloors);
router.delete("/:id", deleteVargikrn);
router.put("/", addFloors);

module.exports = router;
