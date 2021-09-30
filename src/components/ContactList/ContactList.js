import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import actions from '../../redux/actions';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        contacts && (<ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
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

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return allContacts.filter(({name}) =>
        name.toLocaleLowerCase().includes(normalizedFilter),
    );
}

const mapStateToProps = ({ phoneBook: { contacts, filter } }) => ({
    contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);