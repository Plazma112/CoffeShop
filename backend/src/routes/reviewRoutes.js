
import express from 'express';
import { createReview, getReviewsByProduct } from '../controllers/reviewController.js';
import { validateReview } from '../middlewares/validationMiddleware.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, validateReview, createReview);
router.get('/:productId', getReviewsByProduct);

export default router;
