require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/api", require("./routes/WeatherApi.js"));
app.use(express.static("./public"));
app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
});
