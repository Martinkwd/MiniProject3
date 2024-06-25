const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
const fetchData = require("./gamesData");
let gameRoutes = require("./routes/gameRoutes");

app.use(express.json());
app.use("/api/games", gameRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my MySQl application.",
  });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
