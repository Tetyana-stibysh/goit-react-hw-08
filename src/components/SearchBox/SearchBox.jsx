import s from './SearchBox.module.css';
import { useId } from 'react';
const SearchBox = ({ value, onSearch }) => {
  const id = useId();
  return (
    <div className={s.wrapper}>
      <label htmlFor={id} className={s.label}>
        Find contact by name
      </label>
      <input
        type="text"
        id={id}
        className={s.input}
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
