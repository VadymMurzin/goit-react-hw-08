import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import css from './navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};