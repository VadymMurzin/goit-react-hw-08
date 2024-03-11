import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBar from './SearchBar/SearchBar';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operators';
import { selectIsLoading } from '../redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <SearchBar />
      {loading === true ? (
        <p>Loading</p>
      ) : (
        <div>
          <ContactList />
        </div>
      )}
    </div>
  );
}