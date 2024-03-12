import LoginForm from '../../components/LoginForm/LoginForm';
import css from './loginPages.module.css';

export default function LoginPages() {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
}