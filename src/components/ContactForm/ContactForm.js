import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors} from '../../redux';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(contactsSelectors.getContacts);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const { name, value } = evt.currentTarget;

        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        };
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const foundNames = contacts.map(({ name }) => name.toLocaleLowerCase());
        if (foundNames.includes(name.toLocaleLowerCase())) {
            alert(`${name} is already in contacts`);
        } else {
            dispatch(contactsOperations.addContact({name, number}));
            reset();
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>Name</label>
            <input
                className={s.input}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={handleChange}
            />

            <label className={s.label}>Number</label>
            <input
                className={s.input}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={handleChange}
            />
                
            <button
                className={s.button}
                type="submit"
            >
                Add contact
            </button>
        </form>
    );
};

export default ContactForm;