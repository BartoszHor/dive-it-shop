const express = require('express');
const router = express.Router();
const FeedbackController = require('./../controllers/feedbacks.controller')

router.route('/feedbacks').get(FeedbackController.getAll)

module.exports = router;