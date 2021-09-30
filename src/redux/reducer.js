import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const contacts = createReducer([], {
    [actions.addContact]: (state, { payload }) => {
        const foundNames = state.map(({ name }) => name.toLocaleLowerCase());
        const lowerName = payload.name.toLocaleLowerCase();
        if (foundNames.includes(lowerName)) {
            alert(`${payload.name} is already in contacts`);
            return state;
        }
        return [payload, ...state];
    },
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    contacts,
    filter,
});