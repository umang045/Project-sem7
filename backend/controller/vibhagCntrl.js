const asyncHandler = require("express-async-handler");
const Vibhag = require("../model/vibhagModel");
const Kacheri = require("../model/kacheriModel");
const Factory = require("./handleFactory");

//create property
const createVibhag = Factory.createOne(Vibhag);

//delete
const deleteVibhag = Factory.deletOne(Vibhag);

//get all properties
const getAllVibhag = Factory.getAll(Vibhag);

//update properties
const updateVibhag = Factory.updateOne(Vibhag);

//get one property
const getoneVibhag = Factory.getOne(Vibhag);

//add vibhag
const addVibhag = asyncHandler(async (req, res, next) => {
  try {
    const { kacheriId } = req.body;
    const vibhag = await Vibhag.create(req.body);

    const updateKacheri = await Kacheri.findByIdAndUpdate(kacheriId, {
      $push: { વિભાગ: vibhag._id },
    });
    res.json({ vibhag, updateKacheri });
  } catch (error) {
    throw new Error(error);
  }
});

const vibhagByKacheri = asyncHandler(async (req, res) => {
  try {
    const { kacheriId } = req.body;
    const vibhag = await Kacheri.findById(kacheriId).populate("વિભાગ");
    res.send(vibhag);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createVibhag,
  deleteVibhag,
  getAllVibhag,
  updateVibhag,
  getoneVibhag,
  addVibhag,
  vibhagByKacheri,
};
