const asyncHandler = require("express-async-handler");
const Vargikrn = require("../model/vargikrnModel");
const Factory = require("./handleFactory");

const createVargikaranWithFloors = asyncHandler(async (req, res, next) => {
  const { numFloors, vibhagId } = req.body;

  const vargikrn = new Vargikrn({
    vibhagId, // Add vid property here
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
    res.send(vargikrn);
  } catch (error) {
    console.error("Error creating floors:", error);
    res.status(500).json({ message: "Error creating floors" });
  }
});
//get all vargikrn
const getAllVrgikrn = Factory.getAll(Vargikrn);

//push info of property
const addProperty = asyncHandler(async (req, res, next) => {
  const { floor, index, name, area, cost, year, vibhagId } = req.body;

  const vargikrn = await Vargikrn.findOneAndUpdate(
    {
      vibhagId, // This is the condition to check vibhagId
      "માહીતી.floor.floornum": floor, // This is the condition to check floor number
    },
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

  if (!vargikrn) {
    return res.status(404).json({ message: "No document found" });
  }

  res
    .status(201)
    .json({ message: "Property added successfully", data: vargikrn });
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

//delete
const deleteVargikrn = Factory.deletOne(Vargikrn);

module.exports = {
  createVargikaranWithFloors,
  getAllVrgikrn,
  addProperty,
  deleteVargikrn,
  addFloors,
};
