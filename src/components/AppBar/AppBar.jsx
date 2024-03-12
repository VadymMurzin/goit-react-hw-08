import { useAuth } from '../../hooks/useAuth';
import AuthNav from '../AuthNav/AuthNav';
import Navigator from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './appBar.module.css';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigator />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}