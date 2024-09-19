const asyncHandler = require("express-async-handler");
const Vargikrn = require("../model/vargikrnModel");
const Factory = require("./handleFactory");

//create vargikrn
const createVargikrn = Factory.createOne(Vargikrn);


const createVargikaranWithFloors = asyncHandler(async (req, res, next) => {
  const numFloors = req.body.numFloors;

  const vargikrn = new Vargikrn({
    માહીતી: Array(numFloors)
      .fill(0)
      .map((_, index) => ({
        floor: [
          {
            floornum: index + 1,
            info: [],
          },
        ],
      })),
  });

  try {
    await vargikrn.save();
    res.status(201).json({ message: "Floors created successfully" });
  } catch (error) {
    console.error("Error creating floors:", error);
    res.status(500).json({ message: "Error creating floors" });
  }
});

//get all vargikrn
const getAllVrgikrn = Factory.getAll(Vargikrn);

//push info of property
const addProperty = asyncHandler(async (req, res, next) => {
  const { floor, index, name, area, cost, year } = req.body;

  const vargikrn = await Vargikrn.findOneAndUpdate(
    { "માહીતી.floor.floornum": floor },
    {
      $push: {
        "માહીતી.$.floor.0.info": {
          index,
          name,
          area,
          cost,
          year,
        },
      },
    },
    { new: true }
  );

  res.json(vargikrn);

  res.status(201).json({ message: "Property added successfully" });
});

//push floor in database

const addFloors = asyncHandler(async (req, res, next) => {
  const { vId, floornum } = req.body;

  const getFloors = await Vargikrn.findOneAndUpdate(
    { vibhagId: vId },
    {
      $push: {
        "માહીતી.0.floor": {
          floornum,
          info: [],
        },
      },
    }
  );
  res.json(getFloors);
});

const deleteVargikrn = Factory.deletOne(Vargikrn);

module.exports = {
  createVargikaranWithFloors,
  createVargikrn,
  getAllVrgikrn,
  addProperty,
  deleteVargikrn,
  addFloors,
};
