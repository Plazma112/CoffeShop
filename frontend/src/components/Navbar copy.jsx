import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  if (!auth) return null; // guard against missing provider

  const { user, logout } = auth;

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  // Only treat as "authenticated" if we actually have a user ID
  const isAuthenticated = Boolean(user && user.id);

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold">
        Coffee Shop
      </Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/testimonials">Testimonials</Link>

        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            {user.role === "ADMIN" && <Link to="/admin">Admin Panel</Link>}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-2 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
