import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
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
