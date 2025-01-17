const pool = require("./pool");

async function populateDB() {
  const books = [
    "Harry Potter and The Philosopher's Stone",
    "Atomic Habits",
    "Harry Potter and The Chamber Of Secrets",
    "The 5AM Club",
    "Harry Potter and The Half Blood Prince",
  ];

  const publishers = ["James Clear", "JK Rowling", "Robin Sharma"];
  await pool.query(
    "CREATE TABLE IF NOT EXISTS books(book_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, book_title VARCHAR (100), book_genre VARCHAR (25), publisher_id INTEGER);"
  );

  const query =
    "INSERT INTO books (book_title, book_genre, publisher_id) VALUES ($1, $2, $3)";
  books.map(async (book, index) => {
    await pool.query(query, [book, "Fiction", index + 1]);
  });
}

module.exports = populateDB;