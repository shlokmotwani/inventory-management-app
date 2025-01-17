const { Router } = require("express");
const publisherRouter = Router();

publisherRouter.get("/", (req, res) => {
  res.end("Publishers Page");
});

publisherRouter.get("/add-new-publisher", (req, res) => {
  res.end("Add a new Publisher Page");
});

publisherRouter.get("/:publisherID", (req, res) => {
  res.end("Single Publisher Page");
});

publisherRouter.post("/add-new-publisher");

module.exports = publisherRouter;
