import s from '../Styles.module.css';
import { ContactListElem } from '../components/ContactListElem';
import { Loader } from '../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from './Hooks/hooks';
import { contactsOperations } from '../redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export const ContactsList = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  const { contacts, isLoaging, filter } =
    useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <div>
      {isLoaging && <Loader />}
      {isLoggedIn && (
        <ul className={s.items__container}>
          {contacts &&
            filteredContacts.map(({ id, name, number }) => {
              return (
                <ContactListElem
                key={id}
                id={id}
                name={name}
                phone={number}
              />
              );
            })}
        </ul>
      )}
    </div>
  );
};
