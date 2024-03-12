import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading } from '../../redux/selectors';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/operators';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Toaster } from 'react-hot-toast';
import css from './contactsPages.module.css';
import { BarLoader } from 'react-spinners';

export default function ContactsPages() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ContactForm />
      <SearchBar />
      {loading === true ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div>
          <ContactList />
        </div>
      )}
      <Toaster />
    </div>
  );
}