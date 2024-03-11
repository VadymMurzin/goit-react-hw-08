import { useDispatch, useSelector } from 'react-redux';
import css from './searchBar.module.css';
import { filterFiltration } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const filter = event => dispatch(filterFiltration(event.target.value));
  return (
    <div className={css.container}>
      <input name="filter" onChange={filter} value={filters} className={css.input} />
    </div>
  );
}