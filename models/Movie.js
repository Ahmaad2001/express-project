const { model, Schema } = require("mongoose");

const MovieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: String, required: true },
  posterImage: { type: String, required: true },
  ratings: { type: Number, default: 0 },
});

module.exports = model("Movie", MovieSchema);
