import { useEffect, useState } from 'react';
import API from '../utils/api';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    API.get('/testimonials')
      .then(res => setTestimonials(res.data))
      .catch(err => console.error('Failed to fetch testimonials:', err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Customer Testimonials</h2>
      <div className="space-y-4">
        {testimonials.map(t => (
          <div key={t.id} className="border p-4 rounded shadow">
            <p className="italic">"{t.message}"</p>
            <p className="text-right font-semibold mt-2">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
