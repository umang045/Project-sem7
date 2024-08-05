const mongoose = require("mongoose");

var kacheriSchema = new mongoose.Schema(
  {
    ક્ચેરી‌નુ‌નામ: {
      type: String,
      required: true,
    },
    વિભાગ: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vibhag" }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Kacheri", kacheriSchema);
