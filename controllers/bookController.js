const db = require("../db/queries");

const bookController = {
  all_books_GET: async (req, res) => {
    const books = await db.getAllBooks();
    res.render("books", {
      title: "Books",
      books: books,
    });
  },
  add_new_book_GET: (req, res) => {
    res.render("create-book", {
      title: "Add a book",
    })
  },
  book_details_GET: async (req, res) => {
    const bookID = req.params.bookID;
    const book = await db.getBook(bookID);
    res.render("book-details", {
      title: "Details",
      book,
    });
  },
  add_new_book_POST: async (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    await db.insertBook({title, author, genre});
    res.redirect("/books")
  },

  book_delete_GET: async (req, res) => {
    const bookID = req.params.bookID;
    await db.deleteBook(bookID);
    res.redirect("/books");
  }
};

module.exports = bookController;
