import { useEffect, useState } from 'react';
import API from '../utils/api';

export default function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get('/menu')
      .then(res => setItems(res.data))
      .catch(err => console.error('Failed to fetch menu items:', err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Menu</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(item => (
          <div key={item.id} className="border rounded p-4">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="font-bold mt-2">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
