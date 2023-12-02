const express = require("express");
const router = express.Router();

const reviewControllers = require("../controllers/reviewControllers");

router.get("/review", reviewControllers.getAllReviews);
router.post("/review", reviewControllers.createReview);

module.exports = router;
