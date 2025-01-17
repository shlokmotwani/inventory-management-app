const { Router } = require("express");
const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.end("Books Page");
});

bookRouter.get("/add-new-book", (req, res) => {
  res.end("Add a new book Page");
});

bookRouter.get("/:bookID", (req, res) => {
  res.end("Single Book Page");
});

bookRouter.post("/add-new-book");

module.exports = bookRouter;
