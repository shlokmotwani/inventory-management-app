require("dotenv").config();
const path = require("node:path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");
const publisherRouter = require("./routes/publisherRouter");
const PORT = process.env.PORT || 3002;

const app = express();

//initial app setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/books"),
  path.join(__dirname, "views/publishers"),
]);

//app routes
app.use("/", indexRouter);
app.use("/books", bookRouter);
app.use("/publishers", publisherRouter);

app.listen(PORT, () => {
  console.log(`Server started. Listening to port:${PORT}`);
});
