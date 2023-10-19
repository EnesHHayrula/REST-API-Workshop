const router = require("express").Router();

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("DOne");
});

module.exports = router;
