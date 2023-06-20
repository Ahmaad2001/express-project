const Movie = require("../../models/Movie");

exports.movieCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = `${req.file.path}`;
    }
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    return next(error);
  }
};
