
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const ProductReviews = ({ productId }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    fetch(`/api/reviews/${productId}`).then(res => res.json()).then(setReviews);
  }, [productId]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submitReview = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ ...form, productId })
    });
    const newReview = await res.json();
    setReviews([newReview, ...reviews]);
    setForm({ rating: 5, comment: '' });
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold">Reviews</h3>
      {user && (
        <form onSubmit={submitReview} className="my-4 space-y-2">
          <select name="rating" value={form.rating} onChange={handleChange} className="p-2 border">
            {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
          </select>
          <textarea name="comment" value={form.comment} onChange={handleChange} className="w-full p-2 border" placeholder="Write your review" />
          <button className="bg-black text-white px-4 py-2">Submit</button>
        </form>
      )}
      <ul className="space-y-2">
        {reviews.map(r => (
          <li key={r.id} className="border-t pt-2">
            <strong>{r.rating}★</strong> – {r.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
