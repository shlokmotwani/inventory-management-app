const { Router } = require("express");
const bookController = require("../controllers/bookController");
const bookRouter = Router();

bookRouter.get("/", bookController.all_books_GET);
bookRouter.get("/create", bookController.add_new_book_GET);
bookRouter.get("/:bookID", bookController.book_details_GET);
bookRouter.get("/:bookID/delete", bookController.book_delete_GET);

bookRouter.post("/create", bookController.add_new_book_POST);

module.exports = bookRouter;
