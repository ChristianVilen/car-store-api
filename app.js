const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
// Import routes
const carRoute = require("./src/routes/CarApi");

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/cars", carRoute);

// Connect to db
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Linked 😉"))
  .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`Running on ${port} 🚀`);
});
