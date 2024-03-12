import LoginOut from '../LoginOut/LoginOut';
import { useAuth } from '../../hooks/useAuth';
import css from './userMenu.module.css';

export default function UserMenu() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className={css.container}>
      <p className={css.text}>{user.name}</p>
      <LoginOut />
    </div>
  );
}