import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors} from '../../redux';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(contactsSelectors.getVisibleContacts);
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);

    const onDeleteContact = (id) => {
        dispatch(contactsOperations.deleteContact(id));
    };

    return (
        filteredContacts && (<ul className={s.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    name={name}
                    number={number}
                    onDelete={() => onDeleteContact(id)}
                />
            ))}
        </ul>)
    );
}

export default ContactList;