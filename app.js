const express = require("express");
const app = express();  
const connectToMongoDB = require("./config/mongoLocal"); 

connectToMongoDB();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.get("/blogs/styles.css", function (req, res) {
  res.set("Content-Type", "text/css");
  res.sendFile(__dirname + "/public/blogs/styles.css");
});
// Routes

const indexRouter = require("./routes/index.js");
app.use("/", indexRouter);

const companyRouter = require("./routes/company.js");
app.use("/company", companyRouter);

const bookingRouter = require("./routes/booking.js");
app.use("/booking", bookingRouter);

//for our services and Residential relocation
const service1Router = require("./routes/services.js");
app.use("/residential-relocation", service1Router);

// Our Services : Insurance
const insuranceRouter = require("./routes/services/insurance.js");
app.use("/insurance", insuranceRouter);

// Our Services : Automobile Transportation
const automobileRouter = require("./routes/services/automobileTransportation.js");
app.use("/automobile-transportaion", automobileRouter);

// Our Services : Loading and Unloading
const loadUnloadRouter = require("./routes/services/loadUnload.js");
app.use("/load-unload", loadUnloadRouter);

// Our Services : Office Shifting
const officeShiftingRouter = require("./routes/services/officeShifting.js");
app.use("/office-shifting", officeShiftingRouter);

// for blog
const blogRouter = require("./routes/blogs.js");
app.use("/blogs", blogRouter);

//for 5 blogs
const blog1Router = require("./routes/blogs/blog1.js");
app.use("/blog1", blog1Router);

const blog2Router = require("./routes/blogs/blog2.js");
app.use("/blog2", blog2Router);

const blog3Router = require("./routes/blogs/blog3.js");
app.use("/blog3", blog3Router);

const blog4Router = require("./routes/blogs/blog4.js");
app.use("/blog4", blog4Router);

const blog5Router = require("./routes/blogs/blog5.js");
app.use("/blog5", blog5Router);

//for locations and Mumbai :
const mumbaiRouter = require("./routes/location.js");
app.use("/mumbai", mumbaiRouter);

//for Thane
const thaneRouter = require("./routes/locations/thane.js");
app.use("/thane", thaneRouter);

//for Navi Mumbai
const naviMumbaiRouter = require("./routes/locations/naviMumbai.js");
app.use("/navi-mumbai", naviMumbaiRouter);

//for Kerala
const keralaRouter = require("./routes/locations/kerala.js");
app.use("/kerala", keralaRouter);

//for Kochi
const kochiRouter = require("./routes/locations/kochi.js");
app.use("/kochi", kochiRouter);

const ContactUsRouter = require("./routes/ContactUs.js");
app.use("/ContactUs", ContactUsRouter);

const ClientsRouter = require("./routes/Clients.js");
app.use("/Clients", ClientsRouter);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
