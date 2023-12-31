const prisma = require("../config/prisma");

async function getAllMenus(type) {
  try {
    let menus;

    if (type !== undefined) {
      menus = await prisma.menu.findMany({
        where: {
          type: type,
        },
        select: {
          id: true,
          menuName: true,
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
    //made the menuId into Integer
    review.menuId = parseInt(review.menuId);
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
