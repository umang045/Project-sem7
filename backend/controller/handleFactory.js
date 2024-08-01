const asyncHandler = require("express-async-handler");

//default create for all
exports.createOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    try {
      const doc = await Model.create(req.body);
      res.json(doc);
    } catch (error) {
      throw new Error(error);
    }
  });

//default delete for all
exports.deletOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    try {
      const { id } = req.params;
      const doc = await Model.findByIdAndDelete(id);
      res.json(doc);
    } catch (error) {
      throw new Error(error);
    }
  });

//default code to get all
exports.getAll = (Model) =>
  asyncHandler(async (req, res, next) => {
    try {
      const doc = await Model.find();
      res.json(doc);
    } catch (error) {
      throw new Error(error);
    }
  });

//default code for update
exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    try {
      const { id } = req.params;
      const doc = await Model.findByIdAndUpdate(id, req.body, { new: true });
      res.json(doc);
    } catch (error) {
      throw new Error(error);
    }
  });

//default code for get one
exports.getOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    try {
      const { id } = req.params;
      const doc = await Model.findById(id);
      res.json(doc);
    } catch (error) {
      throw new Error(error);
    }
  });
