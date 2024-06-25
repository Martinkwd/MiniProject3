const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/", (req, res) => {
  gameController.getGames(res);
});
router.post("/create", (req, res) => {
  gameController.createGames(req.body, res);
});
router.put("/update", (req, res) => {
  gameController.updateGames(req, res);
});

router.delete("/delete", (req, res) => {
  gameController.deleteGames(req, res);
});
router.get("/start", (req, res) => {
  gameController.startUp(req, res);
});

module.exports = router;
