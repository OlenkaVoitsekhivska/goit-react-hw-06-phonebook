import { useDispatch, useSelector } from 'react-redux';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import style from './ContactsList.module.css';
import actions from 'redux/contacts/contacts-actions';

function ContactsList() {
  const dispatch = useDispatch();

  let filter = useSelector(state => state.contacts.filter);
  let listSelector = useSelector(state => state.contacts.phoneBook);

  const list = () => {
    if (filter) {
      return listSelector.filter(el => el.name.toLowerCase().includes(filter));
    } else {
      return listSelector;
    }
  };

  return (
    <div className={style.contactsBox}>
      <h2>Contacts</h2>
      <ul>
        {list().map(({ id, name, number }) => {
          return (
            <ContactsItem
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => dispatch(actions.deleteContact(id))}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ContactsList;
