const express = require("express");
const router = express.Router();
const {
  createProperty,
  deleteProperty,
  getAllProperty,
  updateProperty,
  getoneProperty,
} = require("../controller/propertyCntrl");

router.post("/create", createProperty);
router.delete("/:id", deleteProperty);
router.get("/", getAllProperty);
router.get("/:id", getoneProperty);
router.put('/:id',updateProperty)
module.exports = router;
