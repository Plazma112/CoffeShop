
import { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch('/api/cart', { credentials: 'include' })
      .then(res => res.json())
      .then(setCart);
  }, []);

  if (!cart) return <p className="p-4">Loading...</p>;
  if (cart.items.length === 0) return <p className="p-4">Your cart is empty.</p>;

  const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-2">
        {cart.items.map(item => (
          <li key={item.id} className="flex justify-between border-b py-2">
            <span>{item.product.name} x {item.quantity}</span>
            <span>${(item.product.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="text-right mt-4 font-bold">Total: ${total.toFixed(2)}</div>
      <a href="/checkout" className="block mt-4 bg-black text-white text-center py-2">Proceed to Checkout</a>
    </div>
  );
};

export default Cart;
