const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.end("Home Page");
});

module.exports = indexRouter;
