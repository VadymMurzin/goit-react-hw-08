import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchContacts } from '../../redux/operators';
import { selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { PacmanLoader } from 'react-spinners';
import css from './contactsPages.module.css';

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
          <PacmanLoader
          color="#3669d7" />
        ) : (
          <div>
            <ContactList />
          </div>
        )}
        <Toaster />
      </div>
    );
  }