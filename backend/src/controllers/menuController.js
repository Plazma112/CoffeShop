import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getMenuItems = async (req, res) => {
  try {
    const items = await prisma.menuItem.findMany();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addMenuItem = async (req, res) => {
  const { name, description, price, image } = req.body;
  try {
    const item = await prisma.menuItem.create({
      data: { name, description, price, image }
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.menuItem.delete({ where: { id } });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
