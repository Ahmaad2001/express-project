const Movie = require("../../models/Movie");

exports.fetchMovie = async (movieId) => {
  const foundMovie = await Movie.findById(movieId);
  return foundMovie;
};

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

exports.moviesGet = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = `${req.file.path}`;
    }
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    return next(error);
  }
};

exports.movieUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = `${req.file.path}`;
    }

    await req.movie.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.movieDelete = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = `${req.file.path}`;
    }
    await req.movie.deleteOne();
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.movieRating = async (req, res, next) => {
  try {
    if (req.body.ratings >= 0 && req.body.ratings <= 10) {
      const updatedMovie = await Movie.updateOne(
        req.movie,
        { $push: { ratings: req.body.ratings } },
        {
          new: true,
        }
      );

      if (req.file) {
        req.body.posterImage = `${req.file.path}`;
      }

      return res
        .status(201)
        .json({ message: `${req.body.ratings} has been added to the ratings` });
    } else {
      return next({
        status: 400,
        message: "make sure the number is from 0 to 10",
      });
    }
  } catch (error) {
    return next({ status: 400, message: error.message });
  }
};
