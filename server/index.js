const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get('/spider', (req, res) => {
  res.send("flag{sp1d3rm4n_d03s_wh4t3v3r_a_sp1d3r_c4n}")
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});