import { Route, Routes } from 'react-router-dom';
import HomePages from '../pages/HomePages/HomePages';
import RegisterPages from '../pages/RegisterPages/RegisterPages';
import ContactsPages from '../pages/ContactsPages/ContactsPages';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operators';
import LoginPages from '../pages/LoginPages/LoginPages';
import AppBar from '../components/AppBar/AppBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import { useAuth } from '../hooks/useAuth';
import { PacmanLoader } from 'react-spinners';

export default function App() { 
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <PacmanLoader
    color="#3669d7" />
  ) : (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPages />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPages />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPages />} />}
        />
      </Routes>
    </div>
  );
}