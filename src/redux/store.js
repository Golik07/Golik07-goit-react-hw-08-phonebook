import { configureStore } from '@reduxjs/toolkit';
import { myContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: myContactsReducer,
    filter: filterReducer,
  },
});
