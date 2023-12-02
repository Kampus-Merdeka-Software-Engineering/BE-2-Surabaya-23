const menuServices = require("../services/menuService");

async function getAllMenus(req, res) {
  const menus = await menuService.getAllMenus();

  res.json(menus);
}

module.exports = {
  getAllMenus,
};
