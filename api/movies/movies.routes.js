const express = require("express");
const router = express.Router();
const {
  movieCreate,
  moviesGet,
  movieUpdate,
  fetchMovie,
  movieDelete,
  movieRating,
} = require("./movies.controllers");
const uploader = require("../../middlewares/uploader");

router.param("movieId", async (req, res, next, movieId) => {
  try {
    const foundMovie = await fetchMovie(movieId);
    if (!foundMovie) return next({ status: 404, message: "Movie not found" });
    req.movie = foundMovie;
    return next();
  } catch (err) {
    return next(err);
  }
});

router.get("/", uploader.single("posterImage"), moviesGet);
router.post("/", uploader.single("posterImage"), movieCreate);
router.put("/:movieId", uploader.single("posterImage"), movieUpdate);
router.delete("/:movieId", uploader.single("posterImage"), movieDelete);
router.put("/:movieId", uploader.single("posterImage"), movieRating);

module.exports = router;
