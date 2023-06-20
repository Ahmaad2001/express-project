const PORT = 8000;
const express = require("express");
const app = express();
const connectDb = require("./database");
connectDb();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
