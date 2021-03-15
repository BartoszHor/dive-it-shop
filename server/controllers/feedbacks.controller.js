const Feedback = require('../models/feedbacks.model');

exports.getAll = async (req, res) => {
    try {
      res.json(await Feedback.find());
    } catch(err) {
      res.status(500).json({message: err})
    }
  }