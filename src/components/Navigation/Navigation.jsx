import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './navigation.module.css';

export default function Navigator() {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.container}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}