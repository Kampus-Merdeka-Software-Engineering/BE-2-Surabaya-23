const prisma = require("../config/prisma");

async function getAllMenus() {
  try {
    const menus = await prisma.menu.findMany();
    return menus;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllMenus,
};
