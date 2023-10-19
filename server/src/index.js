const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();
const PORT = 3030;

// DB Config
mongoose
  .connect("mongodb://127.0.0.1:27017/furnitures")
  .then(() => console.log(`Successfully connected to DB!`))
  .catch((err) => console.log(`Error while connecting to DB!`, err));

// Middleware configs
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // application json
app.use(cors());
app.use(auth);

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

app.get("/", (req, res, next) => {
  res.send("Trying something new");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
