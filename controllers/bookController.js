const books = [
  {
    id: 0,
    title: "Atomic Habits",
  },
  {
    id: 1,
    title: "Harry Potter",
  },
  {
    id: 2,
    title: "The 5AM Club",
  },
];

const bookController = {
  all_books_GET: (req, res) => {
    res.render("books", {
      title: "Books",
      books: books,
    });
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
