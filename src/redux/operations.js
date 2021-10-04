import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactShelfAPI from '../services/contactshelf-api';
import * as contactsActions from './actions';

// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest());
//     try {
//         const contacts = await contactShelfAPI.fetchContacts();
//         dispatch(contactsActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(contactsActions.fetchContactsError(error));
//     }
// };

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await contactShelfAPI.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// export const deleteContact = (id) => async dispatch => {
//     dispatch(contactsActions.deleteContactRequest(id));
//     try {
//         await contactShelfAPI.deleteContact(id);
//         dispatch(contactsActions.deleteContactSuccess(id));
//     } catch (error) {
//         dispatch(contactsActions.deleteContactError(error));
//     }
// }

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            await contactShelfAPI.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// export const addContact = ({name, number}) => async dispatch => {
//     dispatch(contactsActions.addContactRequest());
//     try {
//         const {data} = await contactShelfAPI.postContact({
//             name,
//             number,
//         });
//         dispatch(contactsActions.addContactSuccess(data));
//     } catch (error) {
//         dispatch(contactsActions.addContactError(error));
//     }
// }

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}, { rejectWithValue }) => {    
        try {
            const { data } = await contactShelfAPI.postContact({
                name,
                number,
            });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const changeFilter = (value) => dispatch => {
    dispatch(contactsActions.changeFilter(value));
}