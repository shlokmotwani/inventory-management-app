const { Router } = require("express");
const bookController = require("../controllers/bookController");
const bookRouter = Router();

bookRouter.get("/", bookController.all_books_GET);

bookRouter.get("/add-new-book", bookController.add_new_book_GET);

bookRouter.get("/:bookID", bookController.book_details_GET);

bookRouter.post("/add-new-book", bookController.book_details_POST);

module.exports = bookRouter;
