import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import actions from './contacts-actions';

const phoneBook = createReducer(
  JSON.parse(localStorage.getItem('contacts')) || [],
  {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  }
);

const filter = createReducer('', {
  [actions.updateFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  phoneBook,
  filter,
});
