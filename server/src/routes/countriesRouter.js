const { Router } = require("express");

const countriesRouter = Router();

countriesRouter.get("/countries", (req, res) => {
  res.status(200).send("I'm in countries");
});

countriesRouter.get("/countries/:id", (req, res) => {
  res.status(200).send("Country details");
});

// countriesRouter.get("/countries", (req, res) => {
//     res.status(200).send("I'm in countries")
// });

module.exports = countriesRouter;
