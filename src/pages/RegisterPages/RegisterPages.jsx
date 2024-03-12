import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from './registerPages.module.css';

export default function RegisterPages() {
  return (
    <div className={css.container}>
      {' '}
      <RegisterForm />{' '}
    </div>
  );
}