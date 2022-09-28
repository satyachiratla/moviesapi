const Movies = require("../Database/moviesSchema");

exports.getmovies = async (req, res, next) => {
  try {
    const movies = await Movies.find();
    return res.json(movies);
  } catch (err) {
    console.log(err.message);
  }
};

exports.postmovies = async (req, res, next) => {
  const { title, contentPlot, releaseDate } = req.body;

  try {
    const newData = new Movies({ title, contentPlot, releaseDate });
    await newData.save();
    return res.json(await Movies.find());
  } catch (err) {
    console.log(err.message);
  }
};
