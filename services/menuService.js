const prisma = require("../config/prisma");

async function getAllMenus(type) {
  try {
    let menus;

    if (type !== null) {
      menus = await prisma.menu.findMany({
        where: {
          type: type,
        },
        select: {
          name: true,
        },
      });
    } else {
      menus = await prisma.menu.findMany();
    }

    return menus;
  } catch (err) {
    throw err;
  }
}

async function createMenu(menu) {
  try {
    await prisma.menu.create({
      data: menu,
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllMenus,
  createMenu,
};
