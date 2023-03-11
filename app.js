const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
const indexRouter = require("./routes/index.js");
app.use("/", indexRouter);

const companyRouter = require("./routes/company.js");
app.use("/company", companyRouter);

const bookingRouter = require("./routes/booking.js");
app.use("/booking", bookingRouter);

const blogRouter = require("./routes/blogs.js");
app.use("/blogs", blogRouter);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
