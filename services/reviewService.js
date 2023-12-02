const prisma = require("../config/prisma");

async function getAllReviews() {
  try {
    const reviews = await prisma.review.findMany;
    return reviews;
  } catch (err) {
    throw err;
  }
}

async function createReview(review) {
  try {
    const reviews = await prisma.review.create(review);
    return reviews;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllReviews,
};
