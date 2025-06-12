
import express from 'express';
import { placeOrder, getUserOrders, getAllOrders } from '../controllers/orderController.js';
import { protect, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.post('/', placeOrder);         // Place new order
router.get('/my', getUserOrders);     // Get current user's orders
router.get('/all', isAdmin, getAllOrders);  // Admin-only: view all orders

export default router;
