const express = require("express");
const router = express.Router();
const {
  createKacheri,
  deleteKacheri,
  getAllKacheri,
  updateKacheri,
  getoneKacheri,
  addVibhag,
} = require("../controller/kacheriCntrl");

router.put("/addvibhag", addVibhag);
router.post("/", createKacheri);
router.delete("/:id", deleteKacheri);
router.get("/", getAllKacheri);
router.get("/:id", getoneKacheri);
router.put("/:id", updateKacheri);
module.exports = router;
