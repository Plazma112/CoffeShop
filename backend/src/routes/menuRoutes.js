import express from 'express';
import { getMenuItems, addMenuItem, deleteMenuItem } from '../controllers/menuController.js';
import { protect, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getMenuItems);
router.post('/', protect, isAdmin, addMenuItem);
router.delete('/:id', protect, isAdmin, deleteMenuItem);

export default router;
