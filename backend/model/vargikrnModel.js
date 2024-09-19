const mongoose = require("mongoose");

var vargikaranSchema = new mongoose.Schema(
  {
    vibhagId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vibhag",
    },
    માહીતી: [
      {
        floor: [
          {
            floornum: {
              type: Number,
            },
            info: [
              {
                index: { type: Number },
                name: { type: String },
                area: { type: Number },
                cost: { type: Number },
                year: { type: Number },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Vargikaran", vargikaranSchema);
