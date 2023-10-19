const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();
const PORT = 3030;

// Middleware configs
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // application json 
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");

//   next();
// });

app.get("/", (req, res, next) => {
  res.send("Trying something new");
});
console.log("Is it working! Sure it does! :)");

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
