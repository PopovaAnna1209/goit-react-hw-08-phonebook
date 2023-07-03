import { useContacts } from './Hooks/hooks';
import { deleteToast } from './Toasts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations } from '../redux/contacts/contactsOperations';
import s from '../Styles.module.css';

export const ContactListElem = ({ id, name, phone }) => {
    
    const dispatch = useDispatch();
    const { deleteContact, setFilter } =
    useContacts();
    
    useEffect(() => {
        dispatch(contactsOperations.getContacts());
      }, [dispatch]);

    return (
    <li className={s.item}>
        <p className={s.item__name}>
        {name}: {phone}
        </p>
        <button className={s.user__btn} type="button" onClick={() => {
                      deleteContact(id);
                      deleteToast(`${name} tel:${phone} is deleted`);
                      setFilter('');
                    }}>
            Delete
        </button>
    </li>
    );
    }







