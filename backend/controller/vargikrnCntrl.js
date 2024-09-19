const asyncHandler = require("express-async-handler");
const Vargikrn = require("../model/vargikrnModel");
const Factory = require("./handleFactory");

//create vargikrn
const createVargikrn = Factory.createOne(Vargikrn);

//get all vargikrn
const getAllVrgikrn = Factory.getAll(Vargikrn);

//push info of property

// const addProperty = asyncHandler(async (req, res, next) => {
//     const { floor, index, name, area, cost, year } = req.body;

//   const vargikrn = await Vargikrn.findOneAndUpdate(
//     { "માહીતી.floor.floornum": floor },
//     {
//         $push: {}
//     }
//   );

//   res.json(vargikrn);

//   res.status(201).json({ message: "Property added successfully" });
// });

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

// const addProperty = asyncHandler(async (req, res, next) => {
//   const { floor, index, name, area, cost, year } = req.body;

//   const vargikrn = await Vargikrn.findOneAndUpdate(
//     { "માહીતી.floor.floornum": floor },
//     {
//       $push: {
//         "માહીતી.$.floor": {
//           $each: [
//             {
//               info: {
//                 index,
//                 name,
//                 area,
//                 cost,
//                 year,
//               },
//             },
//           ],
//         },
//       },
//     },
//     { new: true }
//   );

//   res.json(vargikrn);

//   res.status(201).json({ message: "Property added successfully" });
// });



const deleteVargikrn = Factory.deletOne(Vargikrn);

module.exports = {
  createVargikrn,
  getAllVrgikrn,
  addProperty,
  deleteVargikrn,
};
