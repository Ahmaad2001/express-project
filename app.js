const PORT = 8000;
const express = require("express");
const app = express();
const path = require("path");
const connectDb = require("./database");
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const moviesRoutes = require("./api/movies/movies.routes");
const cors = require("cors");
connectDb();

app.use("/media", express.static(path.join(__dirname, "media")));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/movies", moviesRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
