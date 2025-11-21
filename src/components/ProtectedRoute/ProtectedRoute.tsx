import { Navigate } from 'react-router-dom';
import { authAPI } from '../../api/client';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = authAPI.isAuthenticated();

  if (!isAuthenticated) {
    // Перенаправляем на страницу авторизации
    return <Navigate to="/about" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

