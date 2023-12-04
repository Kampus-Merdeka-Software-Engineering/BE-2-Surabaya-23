const prisma = require("../config/prisma");

async function getAllReviews() {
  try {
    const reviews = await prisma.review.findMany();
    return reviews;
  } catch (err) {
    throw err;
  }
}

async function createReview(review) {
  try {
    await prisma.review.create({
      data: review,
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllReviews,
  createReview,
};
