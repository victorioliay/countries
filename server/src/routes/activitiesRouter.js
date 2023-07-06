const { Router } = require("express");

const activitiesRouter = Router();

activitiesRouter.post("/activities", (req, res) => {
  res.status(200).send("activity created");
});

activitiesRouter.get("/activities", (req, res) => {
  res.status(200).send("I'm in countries activities");
});

module.exports = activitiesRouter;
