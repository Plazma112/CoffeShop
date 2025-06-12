
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAdminStats = async (req, res) => {
  try {
    const [totalOrders, totalRevenue, topProducts] = await Promise.all([
      prisma.order.count(),
      prisma.order.aggregate({ _sum: { total: true } }),
      prisma.orderItem.groupBy({
        by: ['productId'],
        _sum: { quantity: true },
        orderBy: { _sum: { quantity: 'desc' } },
        take: 5
      })
    ]);

    const productDetails = await Promise.all(topProducts.map(async item => {
      const product = await prisma.menu.findUnique({ where: { id: item.productId } });
      return {
        productId: item.productId,
        name: product?.name,
        sold: item._sum.quantity
      };
    }));

    res.json({
      totalOrders,
      totalRevenue: totalRevenue._sum.total || 0,
      topSellingProducts: productDetails
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch stats', error: err.message });
  }
};
