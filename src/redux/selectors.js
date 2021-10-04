import { createSelector } from "reselect";

export const getContacts = (state) => state.phoneBook.entities;

export const getFilter = (state) => state.phoneBook.filter;

export const getIsLoading = (state) => state.phoneBook.isLoading;

export const getError = (state) => state.phoneBook.error;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter], (contacts, filter) => {
        const normalizedFilter = filter.toLocaleLowerCase();
        return contacts.filter(({ name }) =>
            name.toLocaleLowerCase().includes(normalizedFilter));
    },
);

// export const getVisibleContacts = state => {
//     const filter = getFilter(state);
//     const contacts = getContacts(state);
    // const normalizedFilter = filter.toLocaleLowerCase();

    // return contacts.filter(({ name }) =>
    //     name.toLocaleLowerCase().includes(normalizedFilter));
// };