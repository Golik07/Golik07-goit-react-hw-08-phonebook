export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const getContactsAll = (state, action) => {
  state.isLoading = false;
  state.contacts = action.payload;
};
export const setContactsHelper = (state, { payload }) => {
  state.isLoading = false;
  state.contacts.unshift(payload);
};
export const deleteContactsHelper = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};
