import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiDollarSign, FiShoppingBag, FiTrendingUp, FiCoffee, FiStar } from 'react-icons/fi';
import { AuthContext } from '../../auth/AuthContext';
import PageTransition from '../../components/PageTransition';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/stats', { 
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.role === 'ADMIN') {
      fetchStats();
    }
  }, [user]);

  if (!user || user.role !== 'ADMIN') {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-red-200">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-red-800 mb-2">Access Denied</h2>
            <p className="text-red-600">You don't have permission to access this page.</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-coffee-50 to-cream-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <FiCoffee className="text-white text-2xl" />
            </div>
            <p className="text-coffee-600 font-medium">Loading dashboard...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  const statCards = [
    {
      title: 'Total Orders',
      value: stats?.totalOrders || 0,
      icon: FiShoppingBag,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Total Revenue',
      value: `$${(stats?.totalRevenue || 0).toFixed(2)}`,
      icon: FiDollarSign,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Top Products',
      value: stats?.topSellingProducts?.length || 0,
      icon: FiStar,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Growth',
      value: '+12.5%',
      icon: FiTrendingUp,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-coffee-50 to-cream-100 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-full flex items-center justify-center shadow-lg">
                <FiCoffee className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-4xl font-serif font-bold text-coffee-800 mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-mocha-600 max-w-2xl mx-auto">
              Welcome back, {user.name}! Here's your coffee shop overview.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.title}
                className="bg-white rounded-2xl shadow-lg border border-coffee-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                      <stat.icon className={`text-xl ${stat.textColor}`} />
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white text-xs font-medium`}>
                      Live
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-mocha-600 mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold text-coffee-800">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Top Selling Products */}
          {stats?.topSellingProducts && stats.topSellingProducts.length > 0 && (
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-coffee-100 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-coffee-100 rounded-xl flex items-center justify-center mr-4">
                  <FiStar className="text-coffee-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-coffee-800">Top Selling Products</h2>
                  <p className="text-mocha-600">Your most popular items</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {stats.topSellingProducts.map((product, index) => (
                  <motion.div
                    key={product.productId}
                    className="flex items-center justify-between p-4 bg-coffee-50 rounded-xl hover:bg-coffee-100 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-coffee-800">{product.name || `Product #${product.productId}`}</h3>
                        <p className="text-sm text-mocha-600">Product ID: {product.productId}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-coffee-700">{product.sold} sold</p>
                      <p className="text-sm text-mocha-500">units</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Quick Actions */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-coffee-100 p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-lg font-serif font-bold text-coffee-800 mb-2">Manage Users</h3>
              <p className="text-mocha-600 text-sm mb-4">View and manage customer accounts</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                View Users
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-coffee-100 p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShoppingBag className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-lg font-serif font-bold text-coffee-800 mb-2">View Orders</h3>
              <p className="text-mocha-600 text-sm mb-4">Monitor and manage all orders</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
                View Orders
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-coffee-100 p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCoffee className="text-coffee-600 text-2xl" />
              </div>
              <h3 className="text-lg font-serif font-bold text-coffee-800 mb-2">Manage Menu</h3>
              <p className="text-mocha-600 text-sm mb-4">Add, edit, or remove menu items</p>
              <button className="px-4 py-2 bg-coffee-600 text-white rounded-lg hover:bg-coffee-700 transition-colors duration-300">
                Manage Menu
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminDashboard;