import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.item}>
      <div>
        <p className={s.text}>
          <IoPerson /> {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
