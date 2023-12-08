const prisma = require("../config/prisma");

async function getAllReviews() {
  try {
    const reviews = await prisma.review.findMany({
      select: {
        personName: true,
        personReview: true,
        rating: true,
        menu: {
          select: {
            name: true,
          },
        },
      },
    });
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
