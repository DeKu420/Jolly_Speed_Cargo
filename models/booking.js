const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  pickup: {
    required: true,
    type: String,
  },
  destination: {
    required: true,
    type: String,
  },
  service: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
  status:{
    required: true,
    type: Number,
  }
});

const BookingModel = mongoose.model("booking", BookingSchema);
module.exports = BookingModel;