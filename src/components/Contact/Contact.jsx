import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import s from './Contact.module.css';

const Contact = ({ contact: { id, name, number }, onDelete }) => {
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
      <button onClick={() => onDelete(id)} className={s.button}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
