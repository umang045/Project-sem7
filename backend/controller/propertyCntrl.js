const asyncHandler = require("express-async-handler");
const Property = require("../model/propertyModel");

const createProperty = asyncHandler(async (req, res) => {
  try {
    const createproperty = await Property.create(req.body);
    res.send(createproperty);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports={
    createProperty
}