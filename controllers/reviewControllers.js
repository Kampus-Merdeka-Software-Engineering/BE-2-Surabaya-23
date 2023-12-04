const reviewService = require("../services/reviewService");

async function getAllReviews(req, res) {
  const reviews = await reviewService.getAllReviews();

  res.json(reviews);
}

async function createReview(req, res) {
  const review = req.body;
  const createdReview = await reviewService.createReview(review);
  res.status(201).json(createdReview);
}

module.exports = {
  getAllReviews,
  createReview,
};
