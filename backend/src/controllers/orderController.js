
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { sendOrderConfirmation } from '../utils/emailService.js';

export const placeOrder = async (req, res) => {
  try {
    const cart = await prisma.cart.findUnique({
      where: { userId: req.user.id },
      include: {
        items: {
          include: { product: true }
        }
      }
    });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const newOrder = await prisma.order.create({
      data: {
        userId: req.user.id,
        total,
        items: {
          create: cart.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity
          }))
        }
      },
      include: { items: true }
    });

    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });

    await sendOrderConfirmation(req.user.email, newOrder);
    res.status(201).json({ message: 'Order placed', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: 'Failed to place order', error: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      include: {
        items: { include: { product: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders', error: err.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        items: { include: { product: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch all orders', error: err.message });
  }
};
