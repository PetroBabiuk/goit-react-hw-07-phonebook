import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from './operations';
import * as contactsActions from './actions';

const entities = createReducer([], {
    // [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
    // [contactsActions.addContactSuccess]: (state, { payload }) => [payload, ...state],
    // [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    //     state.filter(({ id }) => id !== payload),
    
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
    // [contactsActions.fetchContactsRequest]: () => true,
    // [contactsActions.fetchContactsSuccess]: () => false,
    // [contactsActions.fetchContactsError]: () => false,

    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    // [contactsActions.deleteContactRequest]: () => true,
    // [contactsActions.deleteContactSuccess]: () => false,
    // [contactsActions.deleteContactError]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,

    // [contactsActions.addContactRequest]: () => true,
    // [contactsActions.addContactSuccess]: () => false,
    // [contactsActions.addContactError]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
})

const error = createReducer(null, {
    // [contactsActions.fetchContactsError]: (_, { payload }) => payload,
    // [contactsActions.fetchContactsRequest]: () => null,

    [fetchContacts.rejected]: (_, { payload }) => payload,
    [fetchContacts.pending]: () => null,

    // [contactsActions.deleteContactError]: (_, { payload }) => payload,
    // [contactsActions.deleteContactRequest]: () => null,

    [deleteContact.rejected]: (_, { payload }) => payload,
    [deleteContact.pending]: () => null,

    // [contactsActions.addContactError]: (_, { payload }) => payload,
    // [contactsActions.addContactRequest]: () => null,

    [addContact.rejected]: (_, { payload }) => payload,
    [addContact.pending]: () => null,
})

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    entities,
    filter,
    isLoading,
    error,
});