import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
const getVisibleContacts = (contactsSt, filtersName) => {
  return contactsSt.filter(contact =>
    contact.name.toLowerCase().includes(filtersName.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={s.list}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id} className={s.item}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
