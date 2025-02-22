import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from './redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);
  return (
    <div>
      <h1 className="main-title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p className="message">Request in progress...</p>}
      {error && (
        <p className="message">
          Whoops, something went wrong! Please try reloading this page!
        </p>
      )}
      <ContactList />
    </div>
  );
}

export default App;
