const express = require("express");
const router = express.Router();

const menuControllers = require("../controllers/menuControllers");

router.get("/menu", menuControllers.getAllMenus);

module.exports = router;
