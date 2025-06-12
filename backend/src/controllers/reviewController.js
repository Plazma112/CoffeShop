
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createReview = async (req, res) => {
  const { productId, rating, comment } = req.body;
  try {
    const review = await prisma.review.create({
      data: {
        userId: req.user.id,
        productId,
        rating,
        comment
      }
    });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Failed to post review', error: err.message });
  }
};

export const getReviewsByProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId);
    const reviews = await prisma.review.findMany({
      where: { productId },
      include: { user: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reviews', error: err.message });
  }
};
