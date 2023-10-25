import { createSlice } from '@reduxjs/toolkit';
import { deleteContacts, getContacts, setContacts } from '../auth/operations';
import {
  deleteContactsHelper,
  getContactsAll,
  handlePending,
  handleRejected,
  setContactsHelper,
} from './helpers';

const contactsSlice = createSlice({
  name: 'myConctacts',
  initialState: { contacts: [], isLoading: false, error: '' },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, getContactsAll)
      .addCase(setContacts.fulfilled, setContactsHelper)
      .addCase(deleteContacts.fulfilled, deleteContactsHelper)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const myContactsReducer = contactsSlice.reducer;
