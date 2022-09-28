const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Get Todo" });
});

router.post("/", (req, res) => {
  res.send({ message: "Set Todo" });
});

router.put("/:id", (req, res) => {
  res.send({ message: `Update Todo ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.send({ message: `Delete Todo ${req.params.id}` });
});

module.exports = router;
