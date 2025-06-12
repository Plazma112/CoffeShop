
import { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/api/admin/stats', { credentials: 'include' })
      .then(res => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <p className="p-4">Loading stats...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Analytics</h2>
      <p><strong>Total Orders:</strong> {stats.totalOrders}</p>
      <p><strong>Total Revenue:</strong> ${stats.totalRevenue.toFixed(2)}</p>
      <h3 className="mt-4 font-semibold">Top Products</h3>
      <ul className="list-disc ml-6 mt-2">
        {stats.topSellingProducts.map(p => (
          <li key={p.productId}>{p.name} – {p.sold} sold</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
