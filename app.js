const PORT = 8000;
const express = require("express");
const app = express();
const connectDb = require("./database");
connectDb();
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");

app.use(morgan("dev"));
app.use(express.json());

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
