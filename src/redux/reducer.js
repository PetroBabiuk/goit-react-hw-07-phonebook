import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as contactsActions from './actions';

const entities = createReducer([], {
    [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
    [contactsActions.addContactSuccess]: (state, { payload }) => [payload, ...state],
    [contactsActions.deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
    [contactsActions.fetchContactsRequest]: () => true,
    [contactsActions.fetchContactsSuccess]: () => false,
    [contactsActions.fetchContactsError]: () => false,

    [contactsActions.deleteContactRequest]: () => true,
    [contactsActions.deleteContactSuccess]: () => false,
    [contactsActions.deleteContactError]: () => false,

    [contactsActions.addContactRequest]: () => true,
    [contactsActions.addContactSuccess]: () => false,
    [contactsActions.addContactError]: () => false,
})

const error = createReducer(null, {
    [contactsActions.fetchContactsError]: (_, { payload }) => payload,
    [contactsActions.fetchContactsRequest]: () => null,

    [contactsActions.deleteContactError]: (_, { payload }) => payload,
    [contactsActions.deleteContactRequest]: () => null,

    [contactsActions.addContactError]: (_, { payload }) => payload,
    [contactsActions.addContactRequest]: () => null,
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