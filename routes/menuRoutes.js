const express = require("express");
const router = express.Router();

const menuControllers = require("../controllers/menuControllers");

router.get("/menu", menuControllers.getAllMenus);
router.post("/menu", menuControllers.createMenu);

module.exports = router;
