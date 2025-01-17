const bookController = {
  all_books_GET: (req, res) => {
    res.end("Books Page");
  },
  add_new_book_GET: (req, res) => {
    res.end("Add a new book Page");
  },
  book_details_GET: (req, res) => {
    res.end("Single Book Page");
  },
  book_details_POST: (req, res) => {
    res.end("");
  },
};

module.exports = bookController;