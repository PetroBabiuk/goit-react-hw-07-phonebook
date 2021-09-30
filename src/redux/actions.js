import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('phoneBook/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    }
}));

const deleteContact = createAction('phoneBook/delete');
const changeFilter = createAction('phoneBook/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;