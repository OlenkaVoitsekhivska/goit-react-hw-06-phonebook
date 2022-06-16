import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';

import actions from 'redux/contacts/contacts-actions';

function Filter() {
  const dispatch = useDispatch();
  const filterUpd = useSelector(state => state.contacts.filter);

  return (
    <div className={style.filterBox}>
      <label htmlFor="filterInput" className={style.filterHeader}>
        Filter Contacts
        <input
          type="text"
          id="filterInput"
          onChange={e => {
            dispatch(actions.updateFilter(e.target.value));
          }}
          value={filterUpd}
        />
      </label>
    </div>
  );
}

export default Filter;
