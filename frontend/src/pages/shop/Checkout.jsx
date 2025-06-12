
import { useEffect, useState } from 'react';

const Checkout = () => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    fetch('/api/payments/checkout', {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
      .then(data => {
        if (data.url) {
          window.location.href = data.url;
        }
      });
  }, []);

  return (
    <div className="p-6 text-center">
      <p>Redirecting to Stripe...</p>
    </div>
  );
};

export default Checkout;
