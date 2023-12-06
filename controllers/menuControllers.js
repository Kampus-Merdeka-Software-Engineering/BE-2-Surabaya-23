const menuService = require("../services/menuService");

async function getAllMenus(req, res) {
  const menus = await menuService.getAllMenus();

  res.json(menus);
}

async function createMenu(req, res) {
  const menu = req.body;
  const createdMenu = await menuService.createMenu(menu);
  res.status(201).json(createdMenu);
}

module.exports = {
  getAllMenus,
  createMenu,
};
