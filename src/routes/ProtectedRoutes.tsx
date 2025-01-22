
import {  Navigate } from 'react-router-dom';

interface ProtectedRouteProps<T> {
  element: React.ComponentType<T>;
  isAuthenticated: boolean;
  props: T;
}

const ProtectedRoute = <T extends {}>({
  element: Element,
  isAuthenticated,
  props,
}: ProtectedRouteProps<T>) => {
  return isAuthenticated ? <Element {...props} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
