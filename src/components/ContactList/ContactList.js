import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/operations';
import * as contactsSelectors from '../../redux/selectors';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);
    const filter = useSelector(contactsSelectors.getFilter);

    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);
    
    
    const getVisibleContacts = (allContacts, filter) => {
        const normalizedFilter = filter.toLocaleLowerCase();
        return allContacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(normalizedFilter));
    };
    
    const filteredContacts = getVisibleContacts(contacts, filter);

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