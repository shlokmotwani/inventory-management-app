const pool = require("./pool");

async function getAllBooks() {
  const { rows } = await pool.query("SELECT * FROM books");
  return rows;
}

async function getBook(id) {
  const { rows } = await pool.query(
    "SELECT * FROM books WHERE book_id = ($1)",
    [id]
  );
  return rows[0];
}

async function insertBook(book) {
  await pool.query(
    "INSERT INTO books (book_title, book_genre) VALUES (($1), ($2))",
    [book.title, book.genre]
  );
}

async function deleteBook(bookID) {
  await pool.query("DELETE FROM books WHERE book_id = ($1)", [bookID]);
}

module.exports = {
  getAllBooks,
  getBook,
  insertBook,
  deleteBook,
};
