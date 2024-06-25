"use strict";
const { error } = require("console");
const Models = require("../models");
const fetchData = require("../gamesData");
const { response } = require("express");

const startUp = (req, res) => {
  fetchData();
  res.send("Data extracted and created database succesfully");
};

const getGames = (req, res) => {
  Models.Game.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getOneGames = (req, res) => {
  Models.Game.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getCategotyGames = (req, res) => {
  Models.Game.findAll({ where: { genre: req.params.category } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createGames = (data, res) => {
  Models.Game.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateGames = (req, res) => {
  Models.Game.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteGames = (req, res) => {
  Models.Game.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  startUp,
  getGames,
  getCategotyGames,
  getOneGames,
  createGames,
  updateGames,
  deleteGames,
};
