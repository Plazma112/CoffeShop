import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const saved = await prisma.message.create({ data: { name, email, message } });
    res.status(201).json({ message: 'Message received', data: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
