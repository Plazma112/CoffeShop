import { useContext, useEffect, useState } from 'react';
import API from '../utils/api';
import { AuthContext } from '../auth/AuthContext';

export default function AdminPanel() {
  const { user } = useContext(AuthContext);
  const [menu, setMenu] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '' });

    const [stats, setStats] = useState({ users: 0, messages: 0, testimonials: 0, menu: 0 });

  useEffect(() => {
    if (user?.role === 'ADMIN') {
      fetchAll();
      API.get('/admin/stats').then(res => setStats(res.data));
    }
  }, [user]);

  const fetchAll = () => {
    API.get('/menu').then(res => setMenu(res.data));
    API.get('/testimonials').then(res => setTestimonials(res.data));
  };

  useEffect(() => {
    if (user?.role === 'ADMIN') fetchAll();
  }, [user]);

  
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await API.post('/upload/image', formData);
      setForm(prev => ({ ...prev, image: res.data.imageUrl }));
    } catch (err) {
      alert('Image upload failed');
    }
  };

  const handleMenuAdd = async (e) => {
    e.preventDefault();
    try {
      await API.post('/menu', { ...form, price: parseFloat(form.price) });
      setForm({ name: '', description: '', price: '', image: '' });
      fetchAll();
    } catch (err) {
      alert('Failed to add item');
    }
  };

  const handleMenuDelete = async (id) => {
    await API.delete(`/menu/${id}`);
    fetchAll();
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Add Menu Item</h3>
        <form onSubmit={handleMenuAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" className="border p-2 rounded" required />
          <input name="description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" className="border p-2 rounded" required />
          <input name="price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="Price" type="number" className="border p-2 rounded" required />
          <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 rounded" />
          <input name="image" value={form.image}" onChange={e => setForm({ ...form, image: e.target.value })} placeholder="Image URL" className="border p-2 rounded" />
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Add</button>
        </form>
      </section>

      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Site Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border rounded shadow"><p className="text-lg font-bold">{stats.users}</p><p className="text-sm">Users</p></div>
          <div className="p-4 border rounded shadow"><p className="text-lg font-bold">{stats.messages}</p><p className="text-sm">Messages</p></div>
          <div className="p-4 border rounded shadow"><p className="text-lg font-bold">{stats.testimonials}</p><p className="text-sm">Testimonials</p></div>
          <div className="p-4 border rounded shadow"><p className="text-lg font-bold">{stats.menu}</p><p className="text-sm">Menu Items</p></div>
        </div>
      </section>
<section>
        <h3 className="text-xl font-semibold mb-2">Menu Items</h3>
        <ul className="space-y-2">
          {menu.map(item => (
            <li key={item.id} className="border p-3 flex justify-between items-center rounded">
              <div>
                <p><strong>{item.name}</strong> - ${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <button onClick={() => handleMenuDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
