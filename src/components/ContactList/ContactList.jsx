import { selectFilters } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './contactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const filter = useSelector(selectFilters);
  return (
    <div>
      <ul className={css.container}>
        {filter.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <Contact contacts={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}