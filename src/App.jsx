import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import contactData from './contactData.json';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-key');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      return parsedContacts;
    }
    return contactData;
  });
  const [searchedValue, setSearchedValue] = useState('');

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
  const deleteContact = contactId => {
    setContact(prevContacts => {
      return prevContacts.filter(prevContact => prevContact.id !== contactId);
    });
  };

  const addContact = newContact => {
    setContact(prevContacts => {
      return [...prevContacts, newContact];
    });
  };
  useEffect(() => {
    window.localStorage.setItem('saved-key', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h1 className="main-title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchedValue} onSearch={setSearchedValue} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
