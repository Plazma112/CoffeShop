import { useState } from 'react';
import API from '../utils/api';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/messages', form);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Failed to send message');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {sent && <p className="text-green-600">Thanks for reaching out!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full border p-2 rounded h-32" required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send</button>
      </form>
    </div>
  );
}
