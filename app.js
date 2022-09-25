const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Vaithi";
const app = express();
const routes = require("../CRUD app/routers/routes");

mongoose.connect(url, { useNewUrlParser: true });

const conmection = mongoose.connection;

conmection.on("connected", () => {
  console.log("Connected.....");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", routes);

app.listen(4000, () => {
  console.log("Listening to port number 4000");
});
