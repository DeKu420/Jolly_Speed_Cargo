const express = require("express");
const { dirname } = require("path");
const router = express.Router();
const path = require("path");
const BookingModel = require("../models/booking");

router.get("/", (req, res) => {
  res.render(path.join("pages", "booking"), { Title: "Booking" });
});

router.post("/",async (req,res)=>{
  try {
    const booking = new BookingModel(req.body);
    await booking.save();
    res.send("Booking Added");
  } catch (err) {
    res.send(err.message);
  }
})

router.get("/get",async (req,res)=>{
  try {
    const bookings = await BookingModel.find();
    res.send(bookings);
  } catch (error) {
    res.send(error.message)
  }
})

router.patch("/:id",async(req,res)=>{
  const id = req.params.id;
  const payload = req.body;

  try {
    await BookingModel.findByIdAndUpdate({
      _id:id
    },payload);
    res.send("Booking Has been updated");
  } catch (error) {
    res.send(error.message);
  }
})

router.delete("/:id", async(req,res)=>{
  const id =req.params.id;
  try {
    await BookingModel.findByIdAndDelete({
      _id: id
    });
    res.send("Record has been deleted");
  } catch (error) {
    res.send(error.message);
  }
})

module.exports = router;
