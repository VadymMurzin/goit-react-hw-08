import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const infoLogin = !isLoggedIn && !isRefreshing;
  return <div>{infoLogin ? <Navigate to={redirectTo} /> : Component}</div>;
}