const db = require("../db/queries");

const bookController = {
  all_books_GET: async(req, res) => {
    const books = await db.getAllBooks();
    console.log(books);
    res.end();
    // res.render("books", {
    //   title: "Books",
    //   books: books,
    // });
  },
  add_new_book_GET: (req, res) => {
    res.end("Add a new book Page");
  },
  book_details_GET: (req, res) => {
    const bookID = req.params.bookID;
    res.render("book-details", {
      title: "Details",
      book: books[bookID],
    });
  },
  book_details_POST: (req, res) => {
    res.end("");
  },
};

module.exports = bookController;
