import { useDispatch } from 'react-redux';
import css from './contact.module.css';
import { deleteContactAndUpdateList } from '../../redux/operators';

export default function Contact({ contacts }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContactAndUpdateList(contacts.id));
  console.log(contacts);
  return (
    <div>
      <h2 className={css.text}>
        {contacts.name}
      </h2>
      <p className={css.text}>
        {contacts.phone}
      </p>
      <button onClick={handleDelete} className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}
