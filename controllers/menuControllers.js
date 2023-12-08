const menuService = require("../services/menuService");

async function getAllMenus(req, res) {
  const type = req.query.type;
  console.log(type);

  try {
    const menus = await menuService.getAllMenus(type);
    res.json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
