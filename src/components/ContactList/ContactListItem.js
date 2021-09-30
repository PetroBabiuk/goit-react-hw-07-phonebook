import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactListItem = ({ name, number, onDelete }) => (
    <li className={s.item}>
        <span>{name}:</span>
        <span>{number}</span>
        <button type="button" onClick={onDelete}>Delete</button>
    </li>

);

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;