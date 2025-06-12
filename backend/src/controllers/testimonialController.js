import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getTestimonials = async (req, res) => {
  try {
    const items = await prisma.testimonial.findMany();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addTestimonial = async (req, res) => {
  const { name, message } = req.body;
  try {
    const item = await prisma.testimonial.create({ data: { name, message } });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
