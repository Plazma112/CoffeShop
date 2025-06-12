import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Cart from './pages/shop/Cart';
import Checkout from './pages/shop/Checkout';
import MyOrders from './pages/orders/MyOrders';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="contact" element={<Contact />} />
            <Route path="testimonials" element={<Testimonials />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="orders/my" element={<MyOrders />} />
            <Route path="admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;