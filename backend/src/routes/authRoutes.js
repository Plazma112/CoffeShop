import express from 'express';
import { register, login, refresh } from '../controllers/authController.js';
import { authLimiter } from '../middlewares/rateLimiter.js';
import { validateRegister } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', authLimiter, login);

export default router;


import { protect, isAdmin } from '../middlewares/authMiddleware.js';

router.get('/protected', protect, (req, res) => {
  res.json({ message: `Hello ${req.user.role}, your ID is ${req.user.id}` });
});

router.get('/admin-only', protect, isAdmin, (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

router.post('/refresh', refresh);