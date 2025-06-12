
import { useEffect, useState } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders/my', { credentials: 'include' })
      .then(res => res.json())
      .then(setOrders);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? <p>No orders yet.</p> : (
        orders.map(order => (
          <div key={order.id} className="mb-4 border p-4 rounded">
            <p className="font-semibold">Order #{order.id} – ${order.total.toFixed(2)}</p>
            <ul className="ml-4 mt-2 list-disc">
              {order.items.map(item => (
                <li key={item.id}>{item.quantity}x {item.product.name}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
