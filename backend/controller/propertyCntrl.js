const asyncHandler = require("express-async-handler");
const Property = require("../model/propertyModel");
const Factory = require("./handleFactory");

//create property
const createProperty = Factory.createOne(Property);

//delete
const deleteProperty = Factory.deletOne(Property);

//get all properties
const getAllProperty = Factory.getAll(Property);

//update properties
const updateProperty = Factory.updateOne(Property);

//get one property
const getoneProperty = Factory.getOne(Property);

module.exports = {
  createProperty,
  deleteProperty,
  getAllProperty,
  updateProperty,
  getoneProperty
};
