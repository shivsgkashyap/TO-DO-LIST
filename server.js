const express = require("express");
const app = express();
app.listen(3000);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send(list);
});
