const asyncHandler = require("express-async-handler");
const Vargikrn = require("../model/vargikrnModel");
const Factory = require("./handleFactory");

const createVargikaranWithFloors = asyncHandler(async (req, res, next) => {
  const { numFloors, vibhagId, kacheriId } = req.body;

  const vargikrn = new Vargikrn({
    vibhagId,
    kacheriId, // Add vid property here
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
const getAllVrgikrn = asyncHandler(async (req, res, next) => {
  try {
    const getAllVibhg = await Vargikrn.find().populate('vibhagId').populate('kacheriId')
    res.json(getAllVibhg)
  } catch (error) {
    throw new Error(error)
  }
})

const getVargi = asyncHandler(async (req, res, next) => {
  const vId = req.params.vId;
  try {
    const getData = await Vargikrn.find({ "vibhagId": vId })
    // console.log(getData.length);

    if (getData.length > 0) {
      const getAllVibhg = await Vargikrn.find({ vibhagId: vId }).populate('vibhagId').populate('kacheriId')

      res.json(getAllVibhg)
    }
    else {
      res.json({ message: "no data found!!" })
    }

  } catch (error) {

  }
})

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

const getInfoByVibhag = asyncHandler(async (req, res, next) => {
  const { vId } = req.body;

  const vargikarnInfo = await Vargikrn.findOne({ vibhagId: vId });
  res.json(vargikarnInfo);
});

// floorsController.js
const getFloors = asyncHandler(async (req, res, next) => {
  const vibhagId = req.params.vibhagId;
  try {
    const floors = await Vargikrn.find({ vibhagId });
    res.json(floors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching floors data" });
  }
});

//del floors info
const deleteFloorsInfo = asyncHandler(async (req, res, next) => {
  const { vibhgId, floorNum, idx, name } = req.body;

  try {
    const vargikrn = await Vargikrn.find({ "vibhagId": vibhgId })

    const floorIndex = vargikrn[0].માહીતી[floorNum].floor[0].info

    floorIndex.forEach(element => {
      if (element.name == name && element.index == idx) {
        floorIndex.pull(element);
        return;
      }
    });

    await vargikrn[0].save();
    res.status(200).json(floorIndex);

  } catch (error) {
    console.error('Error deleting info record:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

module.exports = {
  createVargikaranWithFloors,
  getAllVrgikrn,
  addProperty,
  deleteVargikrn,
  addFloors,
  getInfoByVibhag,
  getFloors,
  deleteFloorsInfo,
  getVargi
};
