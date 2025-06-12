
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function Admin() {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "ADMIN") {
    return <p className="text-center text-red-600">Access Denied</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <p>Welcome, {user.name}!</p>
      {/* Additional admin features can go here */}
    </div>
  );
}
