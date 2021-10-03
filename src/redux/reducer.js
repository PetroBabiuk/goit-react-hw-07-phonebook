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
    [contactsActions.deleteContactError]: () => false
})

const error = createReducer(null, {
    [contactsActions.fetchContactsError]: (_, { payload }) => payload,
    [contactsActions.fetchContactsRequest]: () => null,

    [contactsActions.deleteContactError]: (_, { payload }) => payload,
    [contactsActions.deleteContactRequest]: () => null,
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