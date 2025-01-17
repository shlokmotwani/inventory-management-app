const bookController = {
  all_books_GET: (req, res) => {
    res.render("books", {
      title: "Books",
      books: [
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
      ],
    });
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
