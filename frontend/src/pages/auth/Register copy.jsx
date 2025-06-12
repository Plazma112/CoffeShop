import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/");
    } catch (err) {
      alert(`Registration failed: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Register</h2>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Name"
        className="block w-full mb-2"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="block w-full mb-2"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        className="block w-full mb-2"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        Register
      </button>
    </form>
  );
}
