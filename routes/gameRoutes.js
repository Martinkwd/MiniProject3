const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.get("/", (req, res) => {
  gameController.getGames(req, res);
});
router.get("/:id", (req, res) => {
  gameController.getOneGames(req, res);
});

router.get("/category/:category", (req, res) => {
  gameController.getCategotyGames(req, res);
});

router.post("/create", (req, res) => {
  gameController.createGames(req.body, res);
});
router.put("/update/:id", (req, res) => {
  gameController.updateGames(req, res);
});

router.delete("/delete/:id", (req, res) => {
  gameController.deleteGames(req, res);
});
router.get("/start", (req, res) => {
  gameController.startUp(req, res);
});

module.exports = router;
