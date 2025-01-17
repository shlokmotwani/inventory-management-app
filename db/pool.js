const {Pool} = require("pg");

// module.exports = new Pool({
//     host: "localhost",
//     user: "a",
//     database: "bookstore",
//     password: "a",
//     port: 5432,
// });

module.exports = new Pool({
    connectionString: "postgresql://a:a@localhost:5432/bookstore"
  });