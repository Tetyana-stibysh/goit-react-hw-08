import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { useId } from 'react';
import { setNameFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const id = useId();
  const handleFilterChange = filter => dispatch(setNameFilter(filter));

  return (
    <div className={s.wrapper}>
      <label htmlFor={id} className={s.label}>
        Find contact by name
      </label>
      <input
        type="text"
        id={id}
        className={s.input}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
