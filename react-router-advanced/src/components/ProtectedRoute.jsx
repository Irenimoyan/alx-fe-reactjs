import { Navigate } from "react-router-dom";   // ✅ Import Navigate
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // ✅ Use Navigate to redirect unauthenticated users
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
