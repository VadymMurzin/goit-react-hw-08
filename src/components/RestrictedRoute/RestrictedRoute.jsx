import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function RestrictedRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn } = useAuth();
  return <div>{isLoggedIn ? <Navigate to={redirectTo} /> : Component}</div>;
}