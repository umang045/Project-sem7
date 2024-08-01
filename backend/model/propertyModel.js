const mongoose = require("mongoose");

var propertySchema = new mongoose.Schema(
  {
    ક્ચેરી‌નુ‌નામ: {
      type: String,
      required: true,
    },
    વિભાગ‌નુ‌નામ: {
      type: String,
    },
    યૂનીટનંબર: {
      type: String,
      required: true,
    },
    મકાનનુ‌નામ: {
      type: String,
    },
    જુનોમિલ્કતનંબર: {
      type: String,
    },
    નવોમિલ્કતનંબર: {
      type: String,
    },
    બિલનંબર_1: {
      type: String,
    },
    બિલનંબર_2: {
      type: String,
    },
    બિલનીકુલરકમ: {
      type: Number,
    },
    મકાનનોઉપયોગ: {
      type: String,
    },
    ગેસલાઈનગ્રાહકનંબર: {
      type: String,
    },
    ઈલેકટ્રીકગ્રાહકનંબર: {
      type: String,
    },
    ફાયરનીવ્યવસ્થા: {
      type: Boolean,
    },
    ફાયરએન_ઓ_સી_નંબર: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Property", propertySchema);
