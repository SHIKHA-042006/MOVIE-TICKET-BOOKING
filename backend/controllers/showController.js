const Show = require('../models/Show');

// Get all shows (you can add filters for city/date later)
const getShows = async (req, res) => {
  try {
    const shows = await Show.find();
    res.json(shows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single show with its seat map
const getShowById = async (req, res) => {
  try {
    const show = await Show.findById(req.params.id);
    if (!show) return res.status(404).json({ message: 'Show not found' });
    res.json(show);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getShows, getShowById };
