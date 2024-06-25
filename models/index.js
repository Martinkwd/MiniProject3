"use strict";

const Game = require("./game");

async function init() {
  await Game.sync();
}

init();

module.exports = {
  Game,
};
