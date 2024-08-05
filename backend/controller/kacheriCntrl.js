const asyncHandler = require("express-async-handler");
const Kacheri = require("../model/kacheriModel");
const Factory = require("./handleFactory");

//create property
const createKacheri = Factory.createOne(Kacheri);

//delete
const deleteKacheri = Factory.deletOne(Kacheri);

//get all properties
const getAllKacheri = Factory.getAll(Kacheri);

//update properties
const updateKacheri = Factory.updateOne(Kacheri);

//get one property
const getoneKacheri = Factory.getOne(Kacheri);

const addVibhag = asyncHandler(async (req, res, next) => {
  try {
    const { KacheriId } = req.body;

    const kacheri = await Kacheri.findByIdAndUpdate(
      KacheriId,
      {
        $push: { વિભાગ: req.body },
      },
      { new: true }
    );

    res.json(kacheri);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createKacheri,
  deleteKacheri,
  getAllKacheri,
  updateKacheri,
  getoneKacheri,
  addVibhag,
};
