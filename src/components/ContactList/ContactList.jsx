import { selectFilters } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './contactList.module.css';
import { useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { ErrorModalMessage } from '../ErrorModalMessage/ErrorModalMessage';
import { useState } from 'react';
ReactModal.setAppElement('#root');

export default function ContactList() {
  const [regular, setRegular] = useState(null);
  const [state, setState] = useState(false);

  const handleOpenModal = regular => {
    setState(true);
    setRegular(regular);
  };

  const handleCloseModal = () => {
    setState(false);
  };
  const filter = useSelector(selectFilters);
  return (
    <div>
      <ul className={css.container}>
        {filter.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <Contact contacts={item} isOpen={handleOpenModal} />
            </li>
          );
        })}
      </ul>
      <ErrorModalMessage closetModal={handleCloseModal} value={state} btn={regular} />
    </div>
  );
}