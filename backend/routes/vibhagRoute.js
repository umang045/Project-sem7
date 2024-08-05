const express = require("express");
const router = express.Router();
const {
  createVibhag,
  deleteVibhag,
  getAllVibhag,
  updateVibhag,
  getoneVibhag,
  addVibhag,
} = require("../controller/vibhagCntrl");

router.post("/create", createVibhag);
router.post("/addvibhag", addVibhag);
router.delete("/:id", deleteVibhag);
router.get("/", getAllVibhag);
router.get("/:id", getoneVibhag);
router.put("/:id", updateVibhag);
module.exports = router;
