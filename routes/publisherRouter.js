const { Router } = require("express");
const publisherController = require("../controllers/publisherController");
const publisherRouter = Router();

publisherRouter.get("/", publisherController.all_publishers_GET);

publisherRouter.get("/add-new-publisher", publisherController.add_new_publisher_GET);

publisherRouter.get("/:publisherID", publisherController.publisher_details_GET);

publisherRouter.post("/add-new-publisher", publisherController.publisher_details_POST);

module.exports = publisherRouter;
